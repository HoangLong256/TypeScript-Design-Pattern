"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData_1 = require("./WeatherData");
var CurrentCondition_1 = require("./CurrentCondition");
var weatherData = new WeatherData_1.WeatherData();
var currentCondition = new CurrentCondition_1.CurrentCondition();
weatherData.registerObserver(currentCondition);
weatherData.setMeasurement(2, 4, 6);
weatherData.setMeasurement(4, 5, 3);
