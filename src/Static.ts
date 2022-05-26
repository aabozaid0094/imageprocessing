import fs from 'fs'
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
                    .thumbs-gallery{display:flex; align-items:center; justify-content:center; flex-wrap:wrap;}
                    .thumbs-gallery .thumb-image{width:300px; height:auto;}
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
     * extendedFilenameObject: Image
     */
    public extendedFilenameObject = (extendedFilename: string): Image => {
        let thumbFileNameParts = extendedFilename.split('.')
        const thumbFileName = thumbFileNameParts
            .slice(0, thumbFileNameParts.length - 1)
            .join('.')
        thumbFileNameParts = thumbFileName.split('-')
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
        const extendedFullFilenames: string[] = fs.readdirSync(path)
        extendedFullFilenames.forEach((extendedfullFilename) => {
            const fullFilenameParts = extendedfullFilename.split('.')
            const fullFilename = fullFilenameParts
                .slice(0, fullFilenameParts.length - 1)
                .join('.')
            fullFilenames.push(fullFilename)
        })
        return Abbreviated ? fullFilenames : extendedFullFilenames
    }
}
export default new Static()
