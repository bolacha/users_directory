'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()

      table.bool('isActive')      //"isActive": false,
      table.string('eyeColor')    // "eyeColor": "brown",
      table.string('name')        //"name": "Hammond Daugherty",
      table.string('gender')      //"gender": "male",
      table.string('officeName')  //"officeName": "MYOPIUM",
      table.string('email')       //"email": "hammonddaugherty@myopium.com",
      table.string('phone')       //"phone": "+1 (828) 543-2948"
      table.string('picture')     //"picture": "http://placehold.it/32x32",
      table.integer('age')         //"age": 30,

    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
