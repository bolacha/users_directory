'use strict'

const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   */
  async index ({ request, response, view }) {

    let params = request.only(['page','offset', 'filter', 'sort', 'search'])


    let options= {}

    if (params.filter) {
      let filters = JSON.parse(params.filter)

      options = { ...options, ...filters}
    }

    let sorts = {}
    if(params.sort) {
      let sort_parsed = JSON.parse(params.sort)

      sorts.column = sort_parsed.column
      sorts.direction = sort_parsed.direction
    } else {
      sorts.column = "id"
      sorts.direction = "ASC"
    }

    return User
      .query()
      .where(options)
      .orderBy(sorts.column, sorts.direction)
      .paginate((params.page == undefined ? 1 : params.page), (params.offset == undefined ? 15 : params.offset))
  }

  /**
   * Create/save a new user.
   * POST users
   */
  async store ({ request, response }) {

    let users = request.post();

    users = users.map((e) => {
      delete e.id;

      return e;
    })

    return await User.createMany(users);
  }

}

module.exports = UserController
