import { Request, Response } from 'express'
import Static from '../Static'

const clearThumbsResult = (req: Request, res: Response): void => {
    const clearedThumbs = res.locals.clearedThumbs as unknown as string[]
    let clearedThumbsHTML = ''
    if (clearedThumbs.length > 0) {
        clearedThumbsHTML = '<h2>Cleared Thumbs:-</h2><ul>'
        clearedThumbs.forEach((clearedThumb) => {
            clearedThumbsHTML += '<li>' + clearedThumb + '</li>'
        })
        clearedThumbsHTML += '</ul>'
    }
    res.send(
        `${Static.header}
    <h1>Clear Thumbs Route</h1>
    <p>All thumbs are cleared</p>
    ${clearedThumbsHTML}
    ${Static.footer}`
    )
}

export default clearThumbsResult
