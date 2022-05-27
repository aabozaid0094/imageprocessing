"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Image_1 = __importDefault(require("./classes/Image"));
var Static = /** @class */ (function () {
    function Static() {
        var _this = this;
        /**
         * extendedFilenameObject: Image
         */
        this.extendedFilenameObject = function (abbreviatedFilename) {
            var thumbFileNameParts = abbreviatedFilename.split('-');
            var thumbName = thumbFileNameParts
                .slice(0, thumbFileNameParts.length - 1)
                .join('-');
            var thumbAspects = thumbFileNameParts[thumbFileNameParts.length - 1];
            thumbFileNameParts = thumbAspects.split('x');
            var thumbWidth = thumbFileNameParts[0];
            var thumbHieght = thumbFileNameParts[1];
            return new Image_1.default(thumbName, Number(thumbWidth), Number(thumbHieght));
        };
        /**
         * getFilenames: string[]
         */
        this.getFilenames = function (path, Abbreviated) {
            if (path === void 0) { path = _this.fullPath; }
            if (Abbreviated === void 0) { Abbreviated = false; }
            var fullFilenames = [];
            var extendedFullFilenames = fs_1.default.readdirSync(path);
            extendedFullFilenames.forEach(function (extendedfullFilename) {
                var fullFilenameParts = extendedfullFilename.split('.');
                var fullFilename = fullFilenameParts
                    .slice(0, fullFilenameParts.length - 1)
                    .join('.');
                fullFilenames.push(fullFilename);
            });
            return Abbreviated ? fullFilenames : extendedFullFilenames;
        };
        this.header = "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>Image Processing</title>\n                <style>\n                    body{font-size:1.25em; line-height:1.5;}\n                    .navigation{display:flex; align-items:center; justify-content:center;}\n                    .navigation a{padding:10px 20px; text-decoration:none; font-size:24px; color:#555;}\n                    .gallery{display:flex; align-items:center; justify-content:center; flex-wrap:wrap;}\n                    .gallery .thumb-image{width:200px; height:auto;}\n                    .gallery figcaption{text-align:center;}\n                    .gallery figure{margin:15px; padding:15px; box-shadow:0px 2px 10px 0 rgba(0,0,0,0.1); transition:all 0.3s ease-in-out;}\n                    .gallery figure:hover{box-shadow:0px 5px 15px 0 rgba(0,0,0,0.1); transform:translateY(-5px);}\n                </style>\n            </head>\n            <body>\n                <header class=\"navigation\">\n                    <a href='/'>Home</a>\n                    <a href='/api/images'>Images</a>\n                    <a href='/api/thumbs'>Thumbs</a>\n                </header>\n            ";
        this.footer = '</body></html>';
        this.fullPath = './assets/full/';
        this.thumbPath = './assets/thumb/';
    }
    return Static;
}());
exports.default = new Static();
