class Image {
    public name: string
    public width: number
    public height: number
    public filename: string
    constructor(name: string, width: number, height: number) {
        this.name = name
        this.width = width
        this.height = height
        this.filename = (((this.name + '-' + this.width) as string) +
            'x' +
            this.height) as string
    }
}

export default Image
