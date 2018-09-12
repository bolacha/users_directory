'use strict'

const { test, trait } = use('Test/Suite')('User')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('filter the data by using one filter', async ({}) => {
})

test('filter the data by using two or more filters', async ({ assert }) => {
  return false;
})

test('paginate the results', async ({ assert }) => {
  return false;
})

test('sorting the results', async ({ assert }) => {
  return false;
})

test('full text search', async ({ assert }) => {
  return false;
})

test('return all the data from the users', async ({ assert }) => {
  return false;
})
