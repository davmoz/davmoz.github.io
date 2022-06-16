import { Event } from './Event.js'

/**
 * ...
 */
export class Reactor {
  #events

  /**
   * Creates a Reactor instance that represents a reactor.
   *
   * @param {string} name - ...
   */
  constructor (name) {
    this.#events = new Map()
  }

  /**
   * Sets up a function that will be called whenever the specified event is delivered to the target.
   *
   * @param {string} eventName - ...
   * @param {Function} callback - ...
   */
  addEventListener (eventName, callback) {
    this.#events.get(eventName).registerCallback(callback)
  }

  /**
   * ...
   *
   * @param {string} eventName - ...
   * @param {*} eventArgs - ...
   */
  dispatchEvent (eventName, eventArgs) {
    for (const callback of this.#events.get(eventName)) {
      callback(eventArgs)
    }
  }

  /**
   * Registers an event.
   *
   * @param {string} eventName - ...
   */
  registerEvent (eventName) {
    this.#events.set(eventName, new Event(eventName))
  }

  // /**
  //  * The `[Symbol.iterator]()` generator function* that implements the
  //  * [iterable protocol]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol}.
  //  *
  //  * @yields {Function} The next callback function in the collection.
  //  */
  // * [Symbol.iterator] () {
  //   for (const callback of this.#callbacks) {
  //     yield callback
  //   }
  // }
}
