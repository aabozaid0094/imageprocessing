"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var thumbs_1 = __importDefault(require("../../middlewares/thumbs"));
var clearThumbs_1 = __importDefault(require("../../middlewares/clearThumbs"));
var clearThumbsResult_1 = __importDefault(require("../../middlewares/clearThumbsResult"));
var thumbsRouter = express_1.default.Router();
thumbsRouter.get('/', thumbs_1.default, clearThumbs_1.default, clearThumbsResult_1.default);
exports.default = thumbsRouter;
