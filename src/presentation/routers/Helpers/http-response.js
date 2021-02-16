const InternalServerError = require('../Errors/internal-server-error')
const MissingParamError = require('../Errors/missing-param-error')

module.exports = class HttpResponse {
  static badRequest (param) {
    return {
      body: new MissingParamError(param),
      statusCode: 400
    }
  }

  static internalServerError () {
    return {
      body: new InternalServerError(),
      statusCode: 500
    }
  }
}
