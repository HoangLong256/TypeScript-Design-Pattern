import {IFlyBehavior} from './IFlyBehavior';
export class FlyNoWay implements IFlyBehavior{
    //Cannot fly
    fly(): void{
        console.log("Cannot Fly...");
    }
}