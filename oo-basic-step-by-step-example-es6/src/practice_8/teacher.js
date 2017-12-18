
import Person from "../../src/practice_2/person.js";

class teacher extends Person {
    constructor(id,name, age, klass) {
        super(id,age);
        this.klass = klass;
        if(id===1){
            this.name=name;
        }
    }

    introduce() {
        if (this.klass) {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class 2.`;
        }
        else
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
    }
}

export default teacher



