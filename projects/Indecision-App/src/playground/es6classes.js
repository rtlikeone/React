class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi my name is ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

class Student extends Person {
  constructor(name, age, major, city) {
    super(name, age);
    this.major = major;
    this.city = city;
  }

  // Show true or false if hasMajor
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler("Romero Lijkwan", 26, "Rotterdam");
console.log(me.getGreeting());

const other = new Traveler("Remus", 22, "Amsterdam");
console.log(other.getGreeting());
