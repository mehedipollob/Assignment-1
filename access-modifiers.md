Introduction
In TypeScript, access modifiers control how class properties and methods can be accessed. They help us protect data and keep our code organized. There are four important access modifiers: "public", "private", "protected", and "readonly".

1. Public
The "public" modifier allows a property or method to be accessed from anywhere. It is the default access modifier in TypeScript.
Example:
class Student {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const student = new Student("Pollob");
console.log(student.name); // Pollob
Here, we can access the "name" property from outside the class because it is public.

2. Private
The "private" modifier allows a property or method to be accessed only inside the class where it is declared. We cannot access it directly from outside the class or from a child class.
Example:
class BankAccount {
  private balance: number = 5000;
  public getBalance() {
    return this.balance;
  }
}
const account = new BankAccount();
console.log(account.getBalance()); // 5000
// console.log(account.balance); // Error

Here, the "balance" property is private, so we can access it only through a public method like "getBalance()".


3. Protected
The "protected" modifier allows a property or method to be accessed inside its own class and its child classes. However, it cannot be accessed directly from outside the class.

Example:
class Employee {
  protected name: string = "Mehedi";
}
class Manager extends Employee {
  showName() {
    return this.name;
  }
}
const manager = new Manager();
console.log(manager.showName()); // Mehedi
// console.log(manager.name); // Error

Here, the "Manager" class can access the "name" property because it inherits from the "Employee" class.


4. Readonly
The "readonly" modifier allows a property to be assigned a value during declaration or inside the constructor. After that, its value cannot be changed.

Example:
class User {
  readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
}
const user = new User(404);
console.log(user.id); // 404
// user.id = 202; // Error

Here, the "id" property cannot be changed after the object is created.


Conclusion
Access modifiers are important in TypeScript OOP because they help control access to class properties and methods. I use "public" when something needs to be accessible everywhere, "private" to protect class data, "protected" when child classes need access, and "readonly" when a value should not change after initialization.

By using these modifiers properly, we can write more secure, organized, and maintainable TypeScript code