
import Person from "../../src/practice_2/person.js";

class worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
    }
}
export default worker