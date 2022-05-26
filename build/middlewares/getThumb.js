"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Static_1 = __importDefault(require("../Static"));
var getThumb = function (req, res) {
    var passedImage = res.locals.passedImage;
    res.send("".concat(Static_1.default.header, "\n        <h1>Images Route</h1>\n        <h2>Parameters</h2>\n        <ul>\n            <li>filename: ").concat(req.query.filename, "</li>\n            <li>width: ").concat(req.query.width, "</li>\n            <li>height: ").concat(req.query.height, "</li>\n        </ul>\n        <h2>Result<span style=\"font-size:12px;\">(if any)</span>:</h2>\n        <img src='").concat('/thumb/' + passedImage.filename + '.jpg', "' alt='").concat(passedImage.name, "'/>\n        ").concat(Static_1.default.footer));
};
exports.default = getThumb;
