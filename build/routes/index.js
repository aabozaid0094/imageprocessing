"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var Static_1 = __importDefault(require("../Static"));
var thumbs_1 = __importDefault(require("./api/thumbs"));
var Router = express_1.default.Router();
Router.use('/images', images_1.default);
Router.use('/thumbs', thumbs_1.default);
Router.get('/', function (req, res) {
    res.send("\n    ".concat(Static_1.default.header, "\n    <h1>Main API Route</h1>\n    <p>*nothing is here use one of the following:- </p>\n    <ul>\n        <li><a href='/api/images'>images</a> route with parameters to see some action.</li>\n        <li><a href='/api/thumbs'>thumbs</a> route to see/clear all existing thumbs.</li>\n    </ul>\n    ").concat(Static_1.default.footer));
});
exports.default = Router;
