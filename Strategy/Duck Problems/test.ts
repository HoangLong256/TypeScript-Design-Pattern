import { MallardDuck } from "./Duck/MallardDuck";
import { RubberDuck } from "./Duck/RubberDuck";

const mallardDuck = new MallardDuck();
mallardDuck.displayName();
mallardDuck.swim();
mallardDuck.performFly();
mallardDuck.performQuack();
console.log();
const rubberDuck = new RubberDuck();
rubberDuck.displayName();
rubberDuck.swim();
rubberDuck.performFly();
rubberDuck.performQuack();