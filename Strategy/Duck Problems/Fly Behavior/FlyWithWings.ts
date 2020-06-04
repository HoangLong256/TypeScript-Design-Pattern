import {IFlyBehavior} from './IFlyBehavior';
export class FlyWithWings implements IFlyBehavior{
    //Can fly
    fly(): void {
        console.log("Flying with wings");
    }
}