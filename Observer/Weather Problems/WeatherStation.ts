import {WeatherData} from "./WeatherData";
import {CurrentCondition} from "./CurrentCondition";

const weatherData = new WeatherData();
const currentCondition = new CurrentCondition();
weatherData.registerObserver(currentCondition);
weatherData.setMeasurement(2,4,6);
weatherData.setMeasurement(4, 5, 3);
