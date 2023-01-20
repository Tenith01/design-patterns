import * as objectAssign from 'object-assign';

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    clone(): Person {
        return objectAssign({}, this);
    }
}

let person = new Person('John', 25);
let clone = person.clone();
console.log(clone.name); // "John"
console.log(clone.age); // 25
console.log(clone === person); // false
