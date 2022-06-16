/**
 * ...
 */
export class LogEventArgs {
  /**
   * ...
   *
   * @param {string} message - ...
   */
  constructor (message) {
    this.message = message
    this.timestamp = Object.freeze(new Date())

    Object.freeze(this)
  }
}
