Introduction
Type Narrowing is an important feature of TypeScript that helps us identify the actual type of a variable. It allows us to work safely with different types of data and avoid unnecessary errors. We can narrow types using different techniques, such as "typeof", "instanceof", and the "in" operator.


1. Using typeof
The "typeof" operator checks the type of a variable. It is useful when working with union types.
Example:
function processValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value * 10;
  }
}
console.log(processValue("hello")); // HELLO
console.log(processValue(5));       // 50
Here, TypeScript understands whether the value is a string or a number.

2. Using instanceof
The "instanceof" operator checks whether an object belongs to a particular class.
class Dog {
  bark() {
    return "gheu gheuuu!";
  }
}
class Cat {
  meow() {
    return "Meow!";
  }
}
function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  return animal.meow();
}
Here, TypeScript identifies whether the object is a "Dog" or a "Cat".


3. Using the in Operator
The "in" operator checks whether a property exists in an object.
type Admin = { name: string; role: string };
type User = { name: string; email: string };
function getInfo(person: Admin | User) {
  if ("role" in person) {
    return person.role;
  }
  return person.email;
}

Conclusion
Type Narrowing makes TypeScript code safer and easier to understand. By using "typeof", "instanceof", and the "in" operator, we can handle different data types more effectively.