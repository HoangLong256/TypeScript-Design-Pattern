import {FlyWithWings} from '../Fly Behavior/FlyWithWings';
import {Quack} from '../Quack Behavior/Quack';
import {Duck} from './Duck'
export class MallardDuck extends Duck<FlyWithWings, Quack >{

    //Constructor
    constructor(){
        super(new FlyWithWings(), new Quack());
    }

    //Display Name
    displayName(): void {
        console.log('I am a mallard duck');
    }
}


