"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Static_1 = __importDefault(require("../Static"));
var validateQuery = function (req, res, next) {
    var queryFilename = req.query.filename;
    var isFullFilenamelengthy = queryFilename.trim().length > 0;
    var queryWidth = req.query.width;
    var isWidthlengthy = queryWidth.trim().length > 0;
    var queryHieght = req.query.height;
    var isHeightlengthy = queryHieght.trim().length > 0;
    var fullFilenames = Static_1.default.getFilenames(Static_1.default.fullPath, true);
    var isFullFilenameExist = fullFilenames.includes(queryFilename.trim());
    if (!(isFullFilenamelengthy && isFullFilenameExist)) {
        var availableImages_1 = '';
        fullFilenames.forEach(function (fullFilename) {
            availableImages_1 += '<li>' + fullFilename + '</li>';
        });
        res.send("".concat(Static_1.default.header, "<h1>Images Route</h1><p>filename is not valid, check available filenames:-</p><ul>").concat(availableImages_1, "</ul>").concat(Static_1.default.footer));
    }
    else if (!(isWidthlengthy && parseInt(queryWidth) > 0)) {
        res.send("".concat(Static_1.default.header, "<h1>Images Route</h1><p>width must be a non-negative integer</p>").concat(Static_1.default.footer));
    }
    else if (!(isHeightlengthy && parseInt(queryHieght) > 0)) {
        res.send("".concat(Static_1.default.header, "<h1>Images Route</h1><p>height must be a non-negative integer</p>").concat(Static_1.default.footer));
    }
    else {
        next();
    }
};
exports.default = validateQuery;
