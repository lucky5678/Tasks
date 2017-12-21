
import Person from "../../src/practice_2/person.js";

class teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce() {
        if (this.klass) {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class 2.`;
        }
        else
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
    }

    introduceWith(studentJerry) {
        if(this.klass===studentJerry.klass) {
            return `My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.`;
        }
        else
            return `My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.`;
    }
}
export default teacher

