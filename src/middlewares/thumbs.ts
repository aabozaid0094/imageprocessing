import { NextFunction, Request, Response } from 'express'
import Static from '../Static'
import Image from '../classes/Image'

const thumbs = (req: Request, res: Response, next: NextFunction): void => {
    let clearThumbs = false
    const queryClearThumbs = req.query.clearThumbs as unknown as string
    if (queryClearThumbs != null && queryClearThumbs.length > 0) {
        try {
            clearThumbs = JSON.parse(queryClearThumbs) //convert to boolean
        } catch (error) {
            console.log(error)
        }
    }
    if (!clearThumbs) {
        const thumbFilenames = Static.getFilenames(Static.thumbPath, true)
        let availableImagesHTML = `<p>*No thumbs created, use the following <a href='/api/images'>images</a> route with parameters to create some.</p>`
        let formHtml = ''
        const currentUrl =
            req.protocol + '://' + req.get('host') + req.originalUrl
        if (thumbFilenames.length > 0) {
            availableImagesHTML =
                '<h2>Available Thumbs:-</h2><section class="gallery">'
            thumbFilenames.forEach((extendedFilename) => {
                const thumbImage: Image = Static.extendedFilenameObject(
                    extendedFilename as string
                )
                const thumbImageHTML =
                    '<img class="thumb-image" src="/thumb/' +
                    thumbImage.filename +
                    '.jpg' +
                    '" alt="' +
                    thumbImage.name +
                    '"/>'
                const thumbImageCaptionHTML =
                    '<figcaption>' + thumbImage.filename + '</figcaption>'
                availableImagesHTML +=
                    '<figure>' +
                    thumbImageHTML +
                    thumbImageCaptionHTML +
                    '</figure>'
            })
            availableImagesHTML += '</section>'
            formHtml = `
            <div class="form-wrapper">
                <form action="${currentUrl}" method="get">
                    <input type="hidden" name="clearThumbs" value="true">
                    <input type="submit" value="Clear Thumb">
                </form>
            </div>`
        }
        res.send(
            `${Static.header}
      <h1>Thumbs Route</h1>
      ${availableImagesHTML}
      ${formHtml}
      ${Static.footer}`
        )
    } else {
        next()
    }
}

export default thumbs
