"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuteQuack = void 0;
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log("<silence>...");
    };
    return MuteQuack;
}());
exports.MuteQuack = MuteQuack;
