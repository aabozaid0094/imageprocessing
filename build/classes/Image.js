"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Image = /** @class */ (function () {
    function Image(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.filename = ((this.name + '-' + this.width) +
            'x' +
            this.height);
    }
    return Image;
}());
exports.default = Image;
