module.exports = class InvalidParamError extends Error {
  constructor (param) {
    super(`Invalid parameter: ${param}`)
    this.name = 'InvalidParamError'
  }
}
