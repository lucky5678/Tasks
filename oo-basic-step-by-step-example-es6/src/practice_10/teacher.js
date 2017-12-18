
import Person from "../../src/practice_2/person.js";

class teacher extends Person {
    constructor(id,name, age, klasses) {
        super(id,age);
        this.name=name;
        this.klass.length = klasses.length;
        this.klass[0]=klasses[0];
        this.klass[1]=klasses[1];

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





