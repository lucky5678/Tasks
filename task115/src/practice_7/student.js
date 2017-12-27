
import Person from "../../src/practice_7/person.js";

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class 2.`;
    }
}
export default Student




