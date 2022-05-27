import { Request, Response, NextFunction } from 'express'
import Static from '../Static'

const validateQuery = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const queryFilename = req.query.filename as unknown as string
    const isFullFilenamelengthy = queryFilename.trim().length > 0
    const queryWidth = req.query.width as unknown as string
    const isWidthlengthy = queryWidth.trim().length > 0
    const queryHieght = req.query.height as unknown as string
    const isHeightlengthy = queryHieght.trim().length > 0

    const fullFilenames = Static.getFilenames(Static.fullPath, true)
    const isFullFilenameExist = fullFilenames.includes(queryFilename.trim())
    if (!(isFullFilenamelengthy && isFullFilenameExist)) {
        let availableImages = ''
        fullFilenames.forEach((fullFilename) => {
            availableImages += '<li>' + fullFilename + '</li>'
        })
        res.send(
            `${Static.header}<h1>Images Route</h1><p>filename is not valid, check available filenames:-</p><ul>${availableImages}</ul>${Static.footer}`
        )
    } else if (!(isWidthlengthy && parseInt(queryWidth) > 0)) {
        res.send(
            `${Static.header}<h1>Images Route</h1><p>width must be a non-negative integer</p>${Static.footer}`
        )
    } else if (!(isHeightlengthy && parseInt(queryHieght) > 0)) {
        res.send(
            `${Static.header}<h1>Images Route</h1><p>height must be a non-negative integer</p>${Static.footer}`
        )
    } else {
        next()
    }
}

export default validateQuery
