import { Request, Response, NextFunction } from 'express'
import Static from '../Static'

const emptyQuery = (req: Request, res: Response, next: NextFunction) => {
    if (
        req.query.filename == null ||
        req.query.width == null ||
        req.query.height == null
    ) {
        const fullFilenames = Static.getFilenames(Static.fullPath, true)
        let availableImagesHTML = ''
        let availableImagesSelectList = ''
        let formHtml = ''
        const currentUrl =
            req.protocol + '://' + req.get('host') + req.originalUrl
        if (fullFilenames.length > 0) {
            availableImagesHTML = '<h2>Available Filenames:-</h2><ul>'
            fullFilenames.forEach((fullFilename) => {
                availableImagesHTML += '<li>' + fullFilename + '</li>'
            })
            availableImagesHTML += '</ul>'
            availableImagesSelectList =
                '<select name="filename" id="filenameSelectList">'
            fullFilenames.forEach((fullFilename) => {
                availableImagesSelectList +=
                    '<option value="' +
                    fullFilename +
                    '">' +
                    fullFilename.toUpperCase() +
                    '</option>'
            })
            availableImagesSelectList += '</select>'
            formHtml = `
      <form action="${currentUrl}" method="get">
          ${availableImagesSelectList}
          <input type="number" min="10" step="10" name="width" id="thumbWidth" value="300">
          <input type="number" min="10" step="10" name="height" id="thumbHeight" value="200">
          <input type="submit" value="Get Thumb">
      </form>`
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
