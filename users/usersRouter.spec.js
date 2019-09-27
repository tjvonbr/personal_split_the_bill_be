const Users = require('./usersModel.js');
const db = require('../data/dbConfig.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  it('should set envrionment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
})