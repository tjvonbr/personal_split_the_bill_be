const request = require('supertest')

const server = require('./server')

describe('server', () => {
    describe('GET', () => {
        it('resturns 200 ok', () => {
            return request(server)
            .get('/')
            .then( res => {
                expect(res.status).toBe(200)
            })           
        })
        it('should return { sanity: check }', async () => {
            const res = await request(server).get('/')

            expect(res.body).toStrictEqual({"sanity": "check"})
        })
        it('return JSON', done => {
            request(server)
            .get('/')
            .then( res => {
                expect(res.type).toMatch(/json/i)
                done()
            }) 
        })
    })
})