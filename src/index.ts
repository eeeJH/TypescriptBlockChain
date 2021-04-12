interface Human {
  name: string;
  age: number;
  gender: string;
  
}

const person = {

  name: "lee",
  age: 28,
  gender: "male"
};

const intro = (person: Human): string => {
  return `Hello, im ${person.name}, im ${person.age}, im a ${person.gender}!`;
};


console.log(intro(person));

export {};