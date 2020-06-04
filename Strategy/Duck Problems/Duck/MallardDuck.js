"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MallardDuck = void 0;
var FlyWithWings_1 = require("../Fly Behavior/FlyWithWings");
var Quack_1 = require("../Quack Behavior/Quack");
var Duck_1 = require("./Duck");
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    //Constructor
    function MallardDuck() {
        return _super.call(this, new FlyWithWings_1.FlyWithWings(), new Quack_1.Quack()) || this;
    }
    //Display Name
    MallardDuck.prototype.displayName = function () {
        console.log('I am a mallard duck');
    };
    return MallardDuck;
}(Duck_1.Duck));
exports.MallardDuck = MallardDuck;
