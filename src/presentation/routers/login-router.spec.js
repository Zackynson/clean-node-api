class LoginRouter {
  async route (httpRequest) {
    if (!httpRequest.body.email) {
      return { statusCode: 400 }
    }
  }
}

describe('login-router', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body:
      {
        password: 'any_password'
      }
    }

    const httpResponse = await sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
