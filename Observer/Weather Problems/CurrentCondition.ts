import {Observer} from "./Observer";
import {DisplayElement} from "./DisplayElement";
import {Subject} from "./Subject";

//Display current condition

export class CurrentCondition implements Observer, DisplayElement{
    private temperature:number;
    private pressure:number;
    private humidity:number;

    //Constructor
    constructor() {
        this.temperature = 0;
        this.pressure = 0;
        this.humidity = 0;
    }

    //Print result
    display(): void {
        console.log("Current Condition Channel: ");
        console.log("Temperature: " + this.temperature);
        console.log("Humidity: " + this.humidity);
        console.log("Pressure: " + this.pressure);
        console.log();
    }

    //Update value
    update(temperature: number, humidity: number, pressure: number): void {
        console.log("Updating the Current Condition")
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

}