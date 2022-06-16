import { format } from 'date-fns'
import svLocale from 'date-fns/locale/sv'
import { BluetoothClient } from './BluetoothClient.js'

const bluetoothClient = new BluetoothClient()

bluetoothClient.addEventListener('log', (eventArgs) => {
  log(`[${format(eventArgs.timestamp, 'Ppp', { locale: svLocale })}] ${eventArgs.message}`)
})

// Get reference to terminal element.
const terminalContainer = document.getElementById('terminal')

// Connect to the device on Connect button click.
document.getElementById('connect')
  .addEventListener('click', async () => {
    try {
      await bluetoothClient.connect()
    } catch (err) {
      log(`[${format(new Date(), 'Ppp', { locale: svLocale })}] ${err}`, 'error')
    }
  })

// Disconnect from the device on Disconnect button click.
document.getElementById('disconnect')
  .addEventListener('click', async () => {
    try {
      await bluetoothClient.disconnect()
    } catch (err) {
      log(`[${format(new Date(), 'Ppp', { locale: svLocale })}] ${err}`, 'error')
    }
  })
/**
 * Outputs to terminal.
 *
 * @param {*} data - ...
 * @param {*} type - ...
 */
function log (data, type = '') {
  terminalContainer.insertAdjacentHTML('afterbegin',
    `<div${type ? ' class="' + type + '"' : ''}>${data}</div>`)
}

const watchID = navigator.geolocation.watchPosition((position) => {
  log(`[${format(new Date(position.timestamp), 'Ppp', { locale: svLocale })}] ${position.coords.latitude}, ${position.coords.longitude}`)
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function (registration) {
      // Registration was successful
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope
      )
    })
    .catch(function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err)
    })
}
