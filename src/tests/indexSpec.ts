import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint response', () => {
    it('gets the app main endpoint', async (/*done*/) => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
        // done()
    })
    it('gets the images endpoint', async (/*done*/) => {
        const response = await request.get('/api/images')
        expect(response.status).toBe(200)
        // done()
    })
    it('gets the images endpoint with missed parameters', async (/*done*/) => {
        const response = await request.get('/api/images?filename')
        expect(response.status).toBe(200)
        // done()
    })
    it('gets the images endpoint with wrong parameters', async (/*done*/) => {
        const response = await request.get(
            '/api/images?filename=filename&width=aa&height=200'
        )
        expect(response.status).toBe(200)
        // done()
    })
    it('gets the images endpoint with rightous parameters', async (/*done*/) => {
        const response = await request.get(
            '/api/images?filename=filename&width=300&height=200'
        )
        expect(response.status).toBe(200)
        // done()
    })
    it('gets the thumbs endpoint', async (/*done*/) => {
        const response = await request.get('/api/thumbs')
        expect(response.status).toBe(200)
        // done()
    })
    it('gets the thumbs endpoint with clear thumbs parameter', async (/*done*/) => {
        const response = await request.get('/api/thumbs?clearThumbs=true')
        expect(response.status).toBe(200)
        // done()
    })
})
