"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var emptyQuery_1 = __importDefault(require("../../middlewares/emptyQuery"));
var validateQuery_1 = __importDefault(require("../../middlewares/validateQuery"));
var assureThumb_1 = __importDefault(require("../../middlewares/assureThumb"));
var getThumb_1 = __importDefault(require("../../middlewares/getThumb"));
var imagesRouter = express_1.default.Router();
imagesRouter.get('/', emptyQuery_1.default, validateQuery_1.default, assureThumb_1.default, getThumb_1.default);
exports.default = imagesRouter;
