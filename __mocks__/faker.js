const faker = require.requireActual('faker')
const mockDate = require('mockdate')
mockDate.set('02/14/2018')
faker.seed(123)
module.exports = faker
