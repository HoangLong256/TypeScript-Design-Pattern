import {IFlyBehavior} from '../Fly Behavior/IFlyBehavior';
import { IQuackBehavior } from '../Quack Behavior/IQuackBehavior';
export abstract class Duck <FlyBehavior extends IFlyBehavior, QuackBehavior extends IQuackBehavior >{
    //Constructor
    flyBehavior : FlyBehavior;
    quackBehavior: QuackBehavior;
    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior){ 
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    //Display name
    abstract displayName():void;

    //Swimming (every duck knows)
    swim(): void{
        console.log('Swimming...');
    }

    //Perform Fly
    performFly():void{
        this.flyBehavior.fly();
    }

    //Perform Quack
    performQuack():void{
        this.quackBehavior.quack();
    }

}