import express, { Request, Response } from 'express'
import Static from './Static'
import Router from './routes/index'

const app = express()
const port = 3000

app.use(express.json())
app.use('/api', Router)
app.use(express.static('./assets'))

app.get('/', (req: Request, res: Response) => {
    res.send(`
  ${Static.header}
  <h1>Main Route</h1>
  <p>*nothing is here, use one of the following:- </p>
  <ul>
      <li><a href='/api'>api</a>/<a href='/api/images'>images</a> route with parameters to see some action.</li>
      <li><a href='/api'>api</a>/<a href='/api/thumbs'>thumbs</a> route to see/clear all existing thumbs.</li>
  </ul>
  ${Static.footer}`)
})

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

export default app
