"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Static_1 = __importDefault(require("../Static"));
var clearThumbs = function (req, res, next) {
    var clearedThumbs = [];
    var thumbFileNames = fs_1.default.readdirSync(Static_1.default.thumbPath);
    if (thumbFileNames.length > 0) {
        for (var _i = 0, thumbFileNames_1 = thumbFileNames; _i < thumbFileNames_1.length; _i++) {
            var thumbFileName = thumbFileNames_1[_i];
            console.log(thumbFileName + ': File Deleted Successfully.');
            clearedThumbs.push(thumbFileName);
            fs_1.default.unlinkSync(Static_1.default.thumbPath + thumbFileName);
        }
    }
    res.locals.clearedThumbs = clearedThumbs;
    next();
};
exports.default = clearThumbs;
