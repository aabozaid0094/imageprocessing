import fs from 'fs'
import Static from '../Static'

const falsyInputImageFullPath = Static.fullPath + 'encenadaport2' + '.jpg'
const truthyInputImageFullPath = Static.fullPath + 'encenadaport' + '.jpg'
const width = 600
const height = 900
const outputImageFullPath =
    ((((Static.thumbPath + 'encenadaport-' + width) as string) +
        'x' +
        height) as string) + '.jpg'
const falsyImageResizeArgs: [string, number, number, string] = [
    falsyInputImageFullPath,
    width,
    height,
    outputImageFullPath,
]
const truthyImageResizeArgs: [string, number, number, string] = [
    truthyInputImageFullPath,
    width,
    height,
    outputImageFullPath,
]

describe('Test image resize functionality', () => {
    it('is resized image created with falsy data it should equal to false', async () => {
        const isResizedImageCreated = await Static.imageResize(
            ...falsyImageResizeArgs
        )
        expect(isResizedImageCreated).toEqual(false)
    })
    it('is resized image created with truthy data it should equal to true', async () => {
        const isResizedImageCreated = await Static.imageResize(
            ...truthyImageResizeArgs
        )
        expect(isResizedImageCreated).toEqual(true)
    })
    afterAll(() => {
        fs.unlinkSync(outputImageFullPath)
        console.log('Test thumb cleared')
    })
})
