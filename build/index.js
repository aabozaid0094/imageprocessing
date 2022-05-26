"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Static_1 = __importDefault(require("./Static"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.use('/api', index_1.default);
app.use(express_1.default.static('./assets'));
app.get('/', function (req, res) {
    res.send("\n  ".concat(Static_1.default.header, "\n  <h1>Main Route</h1>\n  <p>*nothing is here, use one of the following:- </p>\n  <ul>\n      <li><a href='/api'>api</a>/<a href='/api/images'>images</a> route with parameters to see some action.</li>\n      <li><a href='/api'>api</a>/<a href='/api/thumbs'>thumbs</a> route to see/clear all existing thumbs.</li>\n  </ul>\n  ").concat(Static_1.default.footer));
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
