"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Static_1 = __importDefault(require("../Static"));
var emptyQuery = function (req, res, next) {
    if (req.query.filename == null ||
        req.query.width == null ||
        req.query.height == null) {
        var fullFilenames = Static_1.default.getFilenames(Static_1.default.fullPath, true);
        var availableImagesHTML_1 = '';
        var availableImagesSelectList_1 = '';
        var formHtml = '';
        var currentUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        if (fullFilenames.length > 0) {
            availableImagesHTML_1 = '<h2>Available Filenames:-</h2><ul>';
            fullFilenames.forEach(function (fullFilename) {
                availableImagesHTML_1 += '<li>' + fullFilename + '</li>';
            });
            availableImagesHTML_1 += '</ul>';
            availableImagesSelectList_1 =
                '<select name="filename" id="filenameSelectList">';
            fullFilenames.forEach(function (fullFilename) {
                availableImagesSelectList_1 +=
                    '<option value="' +
                        fullFilename +
                        '">' +
                        fullFilename.toUpperCase() +
                        '</option>';
            });
            availableImagesSelectList_1 += '</select>';
            formHtml = "\n      <form action=\"".concat(currentUrl, "\" method=\"get\">\n          ").concat(availableImagesSelectList_1, "\n          <input type=\"number\" min=\"10\" step=\"10\" name=\"width\" id=\"thumbWidth\" value=\"300\">\n          <input type=\"number\" min=\"10\" step=\"10\" name=\"height\" id=\"thumbHeight\" value=\"200\">\n          <input type=\"submit\" value=\"Get Thumb\">\n      </form>");
        }
        res.send("".concat(Static_1.default.header, "\n            <h1>Images Route</h1>\n            <h2>Parameters</h2>\n            <ul>\n                <li>filename from the \"Available Filenames\" list</li>\n                <li>width numbers(0-9)</li>\n                <li>height numbers(0-9)</li>\n            </ul>\n            <p>*Examle /api/images?filename=filename&width=300&height=200</p>\n            ").concat(availableImagesHTML_1, "\n            ").concat(formHtml, "\n            ").concat(Static_1.default.footer));
    }
    else {
        next();
    }
};
exports.default = emptyQuery;
