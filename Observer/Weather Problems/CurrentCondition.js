"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentCondition = void 0;
//Display current condition
var CurrentCondition = /** @class */ (function () {
    //Constructor
    function CurrentCondition() {
        this.temperature = 0;
        this.pressure = 0;
        this.humidity = 0;
    }
    //Print result
    CurrentCondition.prototype.display = function () {
        console.log("Current Condition Channel: ");
        console.log("Temperature: " + this.temperature);
        console.log("Humidity: " + this.humidity);
        console.log("Pressure: " + this.pressure);
        console.log();
    };
    //Update value
    CurrentCondition.prototype.update = function (temperature, humidity, pressure) {
        console.log("Updating the Current Condition");
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    return CurrentCondition;
}());
exports.CurrentCondition = CurrentCondition;
