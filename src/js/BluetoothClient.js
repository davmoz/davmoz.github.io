import { Reactor } from './Reactor.js'
import { LogEventArgs } from './LogEventArgs.js'

/**
 *
 */
export class BluetoothClient extends Reactor {
  #characteristic = undefined
  #device = undefined
  #server = undefined
  #service = undefined
  #boundGattServerDisconnectedHandler = undefined

  /**
   * ...
   */
  constructor () {
    super()
    this.#boundGattServerDisconnectedHandler = this.#gattServerDisconnectedHandler.bind(this)

    this.registerEvent('log')
  }

  /**
   * Launch Bluetooth device chooser and connect to the selected.
   */
  async connect () {
    if (!this.#device) {
      this.#device = await this.#requestBluetoothDevice()
      this.#device.addEventListener('gattserverdisconnected', this.#boundGattServerDisconnectedHandler)

      this.#characteristic = await this.#connectDeviceAndCacheCharacteristic(this.#device)
      await this.#startNotifications(this.#characteristic)
    }
  }

  /**
   * Disconnect from the connected device.
   */
  async disconnect () {
    if (this.#device) {
      this.#raiseLogEvent(`Disconnecting from "${this.#device.name}" bluetooth device...`)
      this.#device.removeEventListener('gattserverdisconnected', this.#boundGattServerDisconnectedHandler)

      if (this.#device.gatt.connected) {
        this.#device.gatt.disconnect()
        this.#raiseLogEvent(`"${this.#device.name}" bluetooth device disconnected`)
      } else {
        this.#raiseLogEvent(`"${this.#device.name}" bluetooth device is already disconnected`)
      }
    }

    this.#device = undefined
  }

  /**
   * ...
   *
   * @returns {object} Bluetooth device.
   */
  async #requestBluetoothDevice () {
    this.#raiseLogEvent('Requesting bluetooth device...')

    const device = await navigator.bluetooth.requestDevice({
    //   filters: [{ services: [0xFFE0] }],
    //   optionalServices: ['battery_service'],
      acceptAllDevices: true
    })
    this.#raiseLogEvent(`"${device.name}" bluetooth device selected`)

    return device
  }

  /**
   * Connects to the device, get service and characteristic.
   */
  async #connectDeviceAndCacheCharacteristic () {
    if (this.#device.gatt.connected && this.#characteristic) {
      return
    }

    this.#raiseLogEvent('Connecting to GATT server...')

    // Connect to GATT server.
    this.#server = await this.#device.gatt.connect()
    this.#raiseLogEvent('GATT server connected, getting service...')

    // Get service.
    this.#service = await this.#server.getPrimaryService(0xFF_E0)
    this.#raiseLogEvent('Service found, getting characteristic...')

    this.#characteristic = await this.#service.getCharacteristic(0xFF_E1)
    this.#raiseLogEvent('Characteristic found')
  }

  /**
   * Enables the characteristic changes notification.
   */
  async #startNotifications () {
    this.#raiseLogEvent('Starting notifications...')

    await this.#characteristic.startNotifications()

    this.#raiseLogEvent('Notifications started')
  }

  /**
   * ...
   */
  async #gattServerDisconnectedHandler () {
    this.#raiseLogEvent(`"${this.#device.name}" bluetooth device disconnected, trying to reconnect...`)

    await this.#connectDeviceAndCacheCharacteristic()
    await this.#startNotifications()
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
