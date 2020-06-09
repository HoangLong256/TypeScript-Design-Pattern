"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherData = void 0;
var WeatherData = /** @class */ (function () {
    //Constructor
    function WeatherData() {
        this.observers = [];
        this.humidity = 0;
        this.temperature = 0;
        this.pressure = 0;
    }
    //Notify to all observer
    WeatherData.prototype.notifyObserver = function () {
        var _this = this;
        console.log("Notify All Observers: \n");
        this.observers.forEach(function (observer) {
            observer.update(_this.temperature, _this.humidity, _this.pressure);
        });
    };
    //Register an observer
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    //Remove an observer
    WeatherData.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > 1) {
            this.observers.splice(index, 1);
        }
    };
    //Listen to the change
    WeatherData.prototype.measurementChanged = function () {
        this.notifyObserver();
    };
    //Set new value
    WeatherData.prototype.setMeasurement = function (temperature, humidity, pressure) {
        console.log("---New update---");
        this.humidity = humidity;
        this.temperature = temperature;
        this.pressure = pressure;
        this.measurementChanged();
    };
    return WeatherData;
}());
exports.WeatherData = WeatherData;
