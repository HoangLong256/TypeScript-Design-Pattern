import {FlyNoWay} from '../Fly Behavior/FlyNoWay';
import {MuteQuack} from '../Quack Behavior/MuteQuack';
import {Duck} from './Duck'

export class RubberDuck extends Duck<FlyNoWay, MuteQuack >{

    //Constructor
    constructor(){
        super(new FlyNoWay(), new MuteQuack());
    }

    //Display Name
    displayName(): void {
        console.log('I am a rubber duck');
    }
}


