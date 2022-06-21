/**
 * ...
 */
export class MeasuredValueEventArgs {
  /**
   * ...
   *
   * @param {string} message - ...
   * @param {object} value - ...
   */
  constructor (message, value) {
    this.message = message
    this.value = Object.freeze(value)
    this.timestamp = Object.freeze(new Date())

    Object.freeze(this)
  }
}
