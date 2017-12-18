import Person from "../../src/practice_2/person.js";

class student extends Person {
    constructor(id, name, age, klass) {
        super(id, age);
        if (id === 1) {
            this.name = name;
        }
        this.klass = klass;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class 2.`;
        return `My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.`;

    }




}
export default student







