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
exports.RubberDuck = void 0;
var FlyNoWay_1 = require("../Fly Behavior/FlyNoWay");
var MuteQuack_1 = require("../Quack Behavior/MuteQuack");
var Duck_1 = require("./Duck");
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    //Constructor
    function RubberDuck() {
        return _super.call(this, new FlyNoWay_1.FlyNoWay(), new MuteQuack_1.MuteQuack()) || this;
    }
    //Display Name
    RubberDuck.prototype.displayName = function () {
        console.log('I am a rubber duck');
    };
    return RubberDuck;
}(Duck_1.Duck));
exports.RubberDuck = RubberDuck;
