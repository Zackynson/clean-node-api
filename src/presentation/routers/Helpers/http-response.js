const InternalServerError = require('../Errors/internal-server-error')
const MissingParamError = require('../Errors/missing-param-error')
const UnauthorizedError = require('../Errors/unauthorized-error')

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

  static unauthorizedError () {
    return {
      body: new UnauthorizedError(),
      statusCode: 401
    }
  }

  static ok () {
    return {
      statusCode: 200
    }
  }
}
