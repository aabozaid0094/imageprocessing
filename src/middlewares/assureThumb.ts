import { Request, Response, NextFunction } from 'express'
import sharp from 'sharp'
import Image from '../classes/Image'
import Static from '../Static'

const assureThumb = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const queryFilename = req.query.filename as unknown as string
    const queryWidth = req.query.width as unknown as string
    const queryHieght = req.query.height as unknown as string

    const existingThumbs: Image[] = []

    const thumbFilenames = Static.getFilenames(Static.thumbPath, true)
    thumbFilenames.forEach((file) => {
        existingThumbs.push(Static.extendedFilenameObject(file as string))
    })

    const passedImage = new Image(
        queryFilename as unknown as string,
        Number(queryWidth) || 100,
        Number(queryHieght) || 100
    )

    if (
        !(
            existingThumbs.findIndex(
                (obj) => obj.filename === passedImage.filename
            ) !== -1
        )
    ) {
        try {
            await sharp(Static.fullPath + passedImage.name + '.jpg')
                .resize(passedImage.width, passedImage.height)
                .toFile(Static.thumbPath + passedImage.filename + '.jpg')
                .then(() => {
                    // output.png is a 200 pixels wide and 300 pixels high image
                    // containing a nearest-neighbour scaled version
                    // contained within the north-east corner of a semi-transparent white canvas
                    console.log('Thumb is created')
                })
        } catch (error) {
            console.log(error)
        }
        const inputImageFullPath = Static.fullPath + passedImage.name + '.jpg'
        const width = passedImage.width
        const height = passedImage.height
        const outputImageFullPath =
            Static.thumbPath + passedImage.filename + '.jpg'
        const isResizedImageCreated = await Static.imageResize(
            inputImageFullPath,
            width,
            height,
            outputImageFullPath
        )
        isResizedImageCreated
            ? console.log('Thumb is created')
            : console.log(
                  'Thumb creation aborted, probable wrong input filename'
              )
    } else {
        console.log('Thumb already exists')
    }
    res.locals.passedImage = passedImage
    next()
}

export default assureThumb
