module.exports = class MissingParamError extends Error {
  constructor (param) {
    super(`Missing parameter: ${param}`)
    this.name = 'MissingParamError'
  }
}
