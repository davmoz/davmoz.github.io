// Selected device object cache
let deviceCache = null

// Get references to UI elements
const connectButton = document.getElementById('connect');
const disconnectButton = document.getElementById('disconnect');
const terminalContainer = document.getElementById('terminal');

// Connect to the device on Connect button click
connectButton.addEventListener('click', () => connect())

// Disconnect from the device on Disconnect button click
disconnectButton.addEventListener('click', () => disconnect())

/**
 * Launch Bluetooth device chooser and connect to the selected.
 */
function connect () {
return (deviceCache ? Promise.resolve(deviceCache) :
      requestBluetoothDevice()).
    //   then(device => connectDeviceAndCacheCharacteristic(device)).
    //   then(characteristic => startNotifications(characteristic)).
      catch(error => log(error));
}

/**
 * Disconnect from the connected device.
 */
function disconnect () {
}

/**
 * 
 * @returns {object} Bluetooth device.
 */
async function requestBluetoothDevice() {
  log('Requesting bluetooth device...');

  const device = await navigator.bluetooth.requestDevice()
//   return navigator.bluetooth.requestDevice({
//     filters: [{services: [0xFFE0]}],
//   }).
  console.log('"' + device.name + '" bluetooth device selected')
  deviceCache = device;
  return deviceCache;
}