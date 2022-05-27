"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Static_1 = __importDefault(require("../Static"));
var thumbs = function (req, res, next) {
    var clearThumbs = false;
    var queryClearThumbs = req.query.clearThumbs;
    if (queryClearThumbs != null && queryClearThumbs.length > 0) {
        try {
            clearThumbs = JSON.parse(queryClearThumbs); //convert to boolean
        }
        catch (error) {
            console.log(error);
        }
    }
    if (!clearThumbs) {
        var thumbFilenames = Static_1.default.getFilenames(Static_1.default.thumbPath, true);
        var availableImagesHTML_1 = "<p>*No thumbs created, use the following <a href='/api/images'>images</a> route with parameters to create some.</p>";
        var formHtml = '';
        var currentUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        if (thumbFilenames.length > 0) {
            availableImagesHTML_1 =
                '<h2>Available Thumbs:-</h2><section class="gallery">';
            thumbFilenames.forEach(function (extendedFilename) {
                var thumbImage = Static_1.default.extendedFilenameObject(extendedFilename);
                var thumbImageHTML = '<img class="thumb-image" src="/thumb/' +
                    thumbImage.filename +
                    '.jpg' +
                    '" alt="' +
                    thumbImage.name +
                    '"/>';
                var thumbImageCaptionHTML = '<figcaption>' + thumbImage.filename + '</figcaption>';
                availableImagesHTML_1 +=
                    '<figure>' +
                        thumbImageHTML +
                        thumbImageCaptionHTML +
                        '</figure>';
            });
            availableImagesHTML_1 += '</section>';
            formHtml = "\n            <div class=\"form-wrapper\">\n                <form action=\"".concat(currentUrl, "\" method=\"get\">\n                    <input type=\"hidden\" name=\"clearThumbs\" value=\"true\">\n                    <input type=\"submit\" value=\"Clear Thumb\">\n                </form>\n            </div>");
        }
        res.send("".concat(Static_1.default.header, "\n      <h1>Thumbs Route</h1>\n      ").concat(availableImagesHTML_1, "\n      ").concat(formHtml, "\n      ").concat(Static_1.default.footer));
    }
    else {
        next();
    }
};
exports.default = thumbs;
