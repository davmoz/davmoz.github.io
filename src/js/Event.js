/**
 * ...
 */
export class Event {
  #name
  #callbacks

  /**
   * Creates a Event instance that represents an event.
   *
   * @param {string} name - ...
   */
  constructor (name) {
    this.#name = name
    this.#callbacks = []
  }

  /**
   * Gets the event's name.
   *
   * @returns {string} The name.
   */
  get name () {
    return this.#name
  }

  /**
   * Registers a callback function.
   *
   * @param {*} callback - ...
   */
  registerCallback (callback) {
    this.#callbacks.push(callback)
  }

  /**
   * The `[Symbol.iterator]()` generator function* that implements the
   * [iterable protocol]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol}.
   *
   * @yields {Function} The next callback function in the collection.
   */
  * [Symbol.iterator] () {
    for (const callback of this.#callbacks) {
      yield callback
    }
  }
}
