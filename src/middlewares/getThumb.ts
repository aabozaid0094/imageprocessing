import { Request, Response } from 'express'
import Image from '../classes/Image'
import Static from '../Static'

const getThumb = (req: Request, res: Response) => {
    const passedImage = res.locals.passedImage as unknown as Image
    res.send(
        `${Static.header}
        <h1>Images Route</h1>
        <h2>Parameters</h2>
        <ul>
            <li>filename: ${req.query.filename}</li>
            <li>width: ${req.query.width}</li>
            <li>height: ${req.query.height}</li>
        </ul>
        <h2>Result<span style="font-size:12px;">(if any)</span>:</h2>
        <img src='${'/thumb/' + passedImage.filename + '.jpg'}' alt='${
            passedImage.name
        }'/>
        ${Static.footer}`
    )
}

export default getThumb
