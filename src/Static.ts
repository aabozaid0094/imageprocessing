import fs, { readdirSync } from 'fs'
import sharp from 'sharp'
import Image from './classes/Image'

class Static {
    public readonly header: string
    public readonly footer: string
    public readonly fullPath: string
    public readonly thumbPath: string
    constructor() {
        this.header = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Image Processing</title>
                <style>
                    body{font-size:1.25em; line-height:1.5;}
                    .navigation{display:flex; align-items:center; justify-content:center;}
                    .navigation a{padding:10px 20px; text-decoration:none; font-size:24px; color:#555;}
                    .gallery{display:flex; align-items:center; justify-content:center; flex-wrap:wrap;}
                    .gallery .thumb-image{width:200px; height:auto;}
                    .gallery figcaption{text-align:center;}
                    .gallery figure{margin:15px; padding:15px; box-shadow:0px 2px 10px 0 rgba(0,0,0,0.1); transition:all 0.3s ease-in-out;}
                    .gallery figure:hover{box-shadow:0px 5px 15px 0 rgba(0,0,0,0.1); transform:translateY(-5px);}
                    .form-wrapper{display:flex; align-items:center; justify-content:center; margin:20px;}
                    .form-wrapper form{display:inline-flex; align-items:center; justify-content:center; padding:20px; background-color:rgba(128,128,128,.3); border-radius:10px;}
                    .form-wrapper form input, .form-wrapper form select{line-height:1.5; height:30px; margin:0 5px; padding:5px 10px; box-sizing:content-box;}
                </style>
            </head>
            <body>
                <header class="navigation">
                    <a href='/'>Home</a>
                    <a href='/api/images'>Images</a>
                    <a href='/api/thumbs'>Thumbs</a>
                </header>
            `
        this.footer = '</body></html>'
        this.fullPath = './assets/full/'
        this.thumbPath = './assets/thumb/'
    }
    /**
     * assureReaddirSync: string[]
     */
    public assureReaddirSync = (path: string): string[] => {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path)
        }
        return readdirSync(path)
    }
    /**
     * extendedFilenameObject: Image
     */
    public extendedFilenameObject = (abbreviatedFilename: string): Image => {
        let thumbFileNameParts = abbreviatedFilename.split('-')
        const thumbName = thumbFileNameParts
            .slice(0, thumbFileNameParts.length - 1)
            .join('-')
        const thumbAspects = thumbFileNameParts[thumbFileNameParts.length - 1]
        thumbFileNameParts = thumbAspects.split('x')
        const thumbWidth = thumbFileNameParts[0]
        const thumbHieght = thumbFileNameParts[1]
        return new Image(
            thumbName as string,
            Number(thumbWidth),
            Number(thumbHieght)
        )
    }
    /**
     * getFilenames: string[]
     */
    public getFilenames = (
        path: string = this.fullPath,
        Abbreviated: boolean = false
    ): string[] => {
        const fullFilenames: string[] = []
        const extendedFullFilenames: string[] = this.assureReaddirSync(path)
        extendedFullFilenames.forEach((extendedfullFilename) => {
            const fullFilenameParts = extendedfullFilename.split('.')
            const fullFilename = fullFilenameParts
                .slice(0, fullFilenameParts.length - 1)
                .join('.')
            fullFilenames.push(fullFilename)
        })
        return Abbreviated ? fullFilenames : extendedFullFilenames
    }
    /**
     * sharpResize: Promise<void>
     */
    public imageResize = async (
        inputImageFullPath: string,
        width: number,
        height: number,
        outputImageFullPath: string
    ): Promise<boolean> => {
        try {
            await sharp(inputImageFullPath)
                .resize(width, height)
                .toFile(outputImageFullPath)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
export default new Static()
