function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};
