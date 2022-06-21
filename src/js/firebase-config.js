const firebaseConfig = {
  apiKey: 'AIzaSyDlh9LD_IGGVNwK_EJzznWPIDXElCIUtxQ',
  authDomain: 'forkbeard-913ec.firebaseapp.com',
  projectId: 'forkbeard-913ec',
  storageBucket: 'forkbeard-913ec.appspot.com',
  messagingSenderId: '651577634314',
  appId: '1:651577634314:web:c591050d98d665d03539f3',
  measurementId: 'G-MMJVHRGP7D',
  databaseURL: 'forkbeard-913ec-default-rtdb.europe-west1.firebasedatabase.app'

}

/**
 * ...
 *
 * @returns {object} ...
 */
export function getFirebaseConfig () {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js')
  } else {
    return firebaseConfig
  }
}
