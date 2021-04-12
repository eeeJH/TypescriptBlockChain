"use strict";
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
Object.defineProperty(exports, "__esModule", { value: true });
// }
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
var lee = new Human("lee", 29, 'male');
var intro = (person) => {
    return `Hello, im ${person.name}, im ${person.age}, im a ${person.gender}!`;
};
console.log(intro(lee));
//# sourceMappingURL=index.js.map