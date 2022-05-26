"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Static_1 = __importDefault(require("../Static"));
var clearThumbsResult = function (req, res) {
    var clearedThumbs = res.locals.clearedThumbs;
    var clearedThumbsHTML = '';
    if (clearedThumbs.length > 0) {
        clearedThumbsHTML = '<h2>Cleared Thumbs:-</h2><ul>';
        clearedThumbs.forEach(function (clearedThumb) {
            clearedThumbsHTML += '<li>' + clearedThumb + '</li>';
        });
        clearedThumbsHTML += '</ul>';
    }
    res.send("".concat(Static_1.default.header, "\n    <h1>Clear Thumbs Route</h1>\n    <p>All thumbs are cleared</p>\n    ").concat(clearedThumbsHTML, "\n    ").concat(Static_1.default.footer));
};
exports.default = clearThumbsResult;
