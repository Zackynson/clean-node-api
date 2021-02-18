const InternalServerError = require('../Errors/internal-server-error')
const UnauthorizedError = require('../Errors/unauthorized-error')

module.exports = class HttpResponse {
  static badRequest (error) {
    return {
      body: error,
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

  static ok (data) {
    return {
      body: data,
      statusCode: 200
    }
  }
}
