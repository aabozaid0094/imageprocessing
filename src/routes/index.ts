import express, { Request, Response } from 'express'
import imagesRouter from './api/images'
import Static from '../Static'
import thumbsRouter from './api/thumbs'

const Router = express.Router()

Router.use('/images', imagesRouter)
Router.use('/thumbs', thumbsRouter)

Router.get('/', (req: Request, res: Response) => {
    res.send(`
    ${Static.header}
    <h1>Main API Route</h1>
    <p>*nothing is here use one of the following:- </p>
    <ul>
        <li><a href='/api/images'>images</a> route with parameters to see some action.</li>
        <li><a href='/api/thumbs'>thumbs</a> route to see/clear all existing thumbs.</li>
    </ul>
    ${Static.footer}`)
})

export default Router
