import { Request, Response, NextFunction } from 'express'
import Static from '../Static'

const emptyQuery = (req: Request, res: Response, next: NextFunction): void => {
    if (
        req.query.filename == null ||
        req.query.width == null ||
        req.query.height == null
    ) {
        const fullFilenames = Static.getFilenames(Static.fullPath, true)
        let availableImagesHTML = `<p>*Sorry no images exist at the moment.</p>`
        if (fullFilenames.length > 0) {
            availableImagesHTML =
                '<h2>Available Images:-</h2><section class="gallery">'
            fullFilenames.forEach((extendedFilename) => {
                const thumbImageHTML =
                    '<img class="thumb-image" src="/full/' +
                    extendedFilename +
                    '.jpg' +
                    '" alt="' +
                    extendedFilename +
                    '"/>'
                const thumbImageCaptionHTML =
                    '<figcaption>' + extendedFilename + '</figcaption>'
                availableImagesHTML +=
                    '<figure>' +
                    thumbImageHTML +
                    thumbImageCaptionHTML +
                    '</figure>'
            })
            availableImagesHTML += '</section>'
        }

        const abbreviatedFullFilenames = Static.getFilenames(
            Static.fullPath,
            true
        )
        // let availableImagesSelectListHTML = ''
        let availableImagesSelectList = ''
        let formHtml = ''
        const currentUrl =
            req.protocol + '://' + req.get('host') + req.originalUrl
        if (abbreviatedFullFilenames.length > 0) {
            // availableImagesSelectListHTML = '<h2>Available Filenames:-</h2><ul>'
            // abbreviatedFullFilenames.forEach((fullFilename) => {
            //     availableImagesSelectListHTML += '<li>' + fullFilename + '</li>'
            // })
            // availableImagesSelectListHTML += '</ul>'
            availableImagesSelectList =
                '<select name="filename" id="filenameSelectList">'
            abbreviatedFullFilenames.forEach((fullFilename) => {
                availableImagesSelectList +=
                    '<option value="' +
                    fullFilename +
                    '">' +
                    fullFilename +
                    '</option>'
            })
            availableImagesSelectList += '</select>'
            formHtml = `
            <div class="form-wrapper">
                <form action="${currentUrl}" method="get">
                    ${availableImagesSelectList}
                    <input type="number" min="10" step="10" name="width" id="thumbWidth" value="300">
                    <input type="number" min="10" step="10" name="height" id="thumbHeight" value="200">
                    <input type="submit" value="Get Thumb">
                </form>
            </div>`
        }
        res.send(
            `${Static.header}
            <h1>Images Route</h1>
            <h2>Parameters</h2>
            <ul>
                <li>filename from the "Available Filenames" list</li>
                <li>width numbers(0-9)</li>
                <li>height numbers(0-9)</li>
            </ul>
            <p>*Examle /api/images?filename=filename&width=300&height=200</p>
            ${availableImagesHTML}
            ${formHtml}
            ${Static.footer}`
        )
    } else {
        next()
    }
}

export default emptyQuery
