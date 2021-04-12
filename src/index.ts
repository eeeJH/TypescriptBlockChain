// interface Human {
//   name: string;
//   age: number;
//   gender: string;
  
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;
        
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

var lee = new Human("lee", 29, 'male');

var intro = (person: Human): string => {
  return `Hello, im ${person.name}, im ${person.age}, im a ${person.gender}!`;
};


console.log(intro(lee));

export {};