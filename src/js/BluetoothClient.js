import { Reactor } from './Reactor.js'
import { LogEventArgs } from './LogEventArgs.js'
import { MeasuredValueEventArgs } from './MeasuredValueEventArgs.js'

/**
 *
 */
export class BluetoothClient extends Reactor {
  #serviceUUid
  #characteristicUuid

  #characteristic = undefined
  #bluetoothDevice = undefined

  #boundGattServerDisconnectedHandler = undefined
  #boundCharacteristicValueChangedHandler = undefined

  static events = Object.freeze({
    LOG: 'log',
    NEW_MEASURED_VALUE: 'newmeasuredvalue'
  })

  /**
   * ...
   */
  constructor () {
    super()

    this.#boundGattServerDisconnectedHandler = this.#gattServerDisconnectedHandler.bind(this)
    this.#boundCharacteristicValueChangedHandler = this.#characteristicValueChangedHandler.bind(this)

    this.registerEvent('log')
    this.registerEvent('newmeasuredvalue')
  }

  /**
   * Launch Bluetooth device chooser and connect to the selected.
   *
   * @param {*} serviceUUid - ...
   * @param {*} characteristicUuid - ...
   */
  async connect (serviceUUid, characteristicUuid) {
    if (this.#bluetoothDevice) {
      await this.disconnect()
    }

    this.#serviceUUid = serviceUUid
    this.#characteristicUuid = characteristicUuid

    this.#bluetoothDevice = await this.#requestBluetoothDevice()
    this.#bluetoothDevice.addEventListener('gattserverdisconnected', this.#boundGattServerDisconnectedHandler)

    await this.#connectDeviceAndCacheCharacteristic(this.#bluetoothDevice)
    await this.#startNotifications(this.#characteristic)
  }

  /**
   * Disconnect from the connected device.
   */
  async disconnect () {
    if (this.#characteristic) {
      await this.#characteristic.stopNotifications()
      this.#raiseLogEvent('Notifications stopped')
      this.#characteristic.removeEventListener('characteristicvaluechanged', this.#boundCharacteristicValueChangedHandler)
      this.#characteristic = undefined
    } else {
      this.#raiseLogEvent('Notifications already stopped')
    }

    if (this.#bluetoothDevice) {
      this.#raiseLogEvent(`Disconnecting from "${this.#bluetoothDevice.name}" bluetooth device...`)
      this.#bluetoothDevice.removeEventListener('gattserverdisconnected', this.#boundGattServerDisconnectedHandler)

      if (this.#bluetoothDevice.gatt.connected) {
        this.#bluetoothDevice.gatt.disconnect()
        this.#raiseLogEvent(`"${this.#bluetoothDevice.name}" bluetooth device disconnected`)
      } else {
        this.#raiseLogEvent(`"${this.#bluetoothDevice.name}" bluetooth device is already disconnected`)
      }
      this.#bluetoothDevice = undefined
    } else {
      this.#raiseLogEvent('No bluetooth device is requested')
    }
  }

  /**
   * ...
   *
   * @returns {object} Bluetooth device.
   */
  async #requestBluetoothDevice () {
    this.#raiseLogEvent('Requesting bluetooth device...')

    const device = await navigator.bluetooth.requestDevice({
      // filters: [{ services: ['heart_rate'] }]
      // filters: [{ services: [0xFFE0] }],
      // optionalServices: [0x2BDC545D6B4B7C],
      filters: [{ name: 'Forkbeard' }],
      // acceptAllDevices: true,
      // filters: [{ services: [this.#serviceUUid] }],
      optionalServices: [this.#serviceUUid]
    })
    this.#raiseLogEvent(`"${device.name}" bluetooth device selected`)

    return device
  }

  /**
   * Connects to the device, get service and characteristic.
   */
  async #connectDeviceAndCacheCharacteristic () {
    if (this.#bluetoothDevice.gatt.connected && this.#characteristic) {
      return
    }

    this.#raiseLogEvent('Connecting to GATT server...')

    // Connect to GATT server.
    const server = await this.#bluetoothDevice.gatt.connect()
    this.#raiseLogEvent('GATT server connected, getting service...')

    // Get service.
    const service = await server.getPrimaryService(this.#serviceUUid)
    this.#raiseLogEvent('Service found, getting characteristic...')

    this.#characteristic = await service.getCharacteristic(this.#characteristicUuid)
    this.#raiseLogEvent('Characteristic found')
  }

  /**
   * Enables the characteristic changes notification.
   */
  async #startNotifications () {
    this.#raiseLogEvent('Starting notifications...')
    await this.#characteristic.startNotifications()
    this.#raiseLogEvent('Notifications started')

    this.#characteristic.addEventListener('characteristicvaluechanged', this.#boundCharacteristicValueChangedHandler)
    this.#raiseLogEvent('Listening for value changes...')
  }

  /**
   * ...
   */
  async #gattServerDisconnectedHandler () {
    this.#raiseLogEvent(`"${this.#bluetoothDevice.name}" bluetooth device disconnected, trying to reconnect...`)

    await this.#connectDeviceAndCacheCharacteristic()
    await this.#startNotifications()
  }

  /**
   * ...
   *
   * @param {*} event ...
   */
  async #characteristicValueChangedHandler (event) {
    console.log(event.target)

    const { value: dataView } = event.target
    console.log({ dataView })
    if (dataView?.byteLength > 0) {
      this.dispatchEvent('newmeasuredvalue', new MeasuredValueEventArgs('fake data', dataView.getInt8(0).toString()))
    }
  }

  /**
   * ...
   *
   * @param {string} message - ...
   */
  #raiseLogEvent (message) {
    this.dispatchEvent('log', new LogEventArgs(message))
  }
}
