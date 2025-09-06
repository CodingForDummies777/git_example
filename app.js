function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

User.prototype.haveBirthday = function() {
    this.age += 1;
    console.log("Happy birthday " + this.name + "! You are now " + this.age + " years old.");
};