import {Subject} from "./Subject";
import {Observer} from "./Observer";

export class WeatherData implements Subject{
    private observers: Observer[];
    private humidity: number;
    private temperature: number;
    private pressure: number;
    //Constructor
    constructor() {
        this.observers = [];
        this.humidity = 0;
        this.temperature = 0;
        this.pressure = 0;
    }

    //Notify to all observer
    public notifyObserver(): void {
        console.log("Notify All Observers: \n");
        this.observers.forEach(observer =>{
            observer.update(this.temperature, this.humidity, this.pressure);
        })
    }

    //Register an observer
    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    //Remove an observer
    public removeObserver(observer: Observer): void {
        let index: number = this.observers.indexOf(observer);
        if(index > 1){
            this.observers.splice(index, 1);
        }
    }

    //Listen to the change
    public measurementChanged():void{
        this.notifyObserver();
    }

    //Set new value
    public setMeasurement(temperature: number, humidity: number, pressure: number ){
        console.log("---New update---")
        this.humidity = humidity;
        this.temperature = temperature;
        this.pressure = pressure;
        this.measurementChanged();
    }
}