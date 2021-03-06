import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import Static from '../Static'

const clearThumbs = (req: Request, res: Response, next: NextFunction): void => {
    const clearedThumbs = []
    const thumbFileNames = Static.assureReaddirSync(Static.thumbPath)
    if (thumbFileNames.length > 0) {
        for (const thumbFileName of thumbFileNames) {
            console.log(thumbFileName + ': File Deleted Successfully.')
            clearedThumbs.push(thumbFileName)
            fs.unlinkSync(Static.thumbPath + thumbFileName)
        }
    }
    res.locals.clearedThumbs = clearedThumbs
    next()
}

export default clearThumbs
