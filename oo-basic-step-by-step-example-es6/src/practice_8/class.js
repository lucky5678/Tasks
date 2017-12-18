class klass {
    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {

        this.leader = student;
    }
}
export default klass

