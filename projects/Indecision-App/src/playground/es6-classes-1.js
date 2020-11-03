// PERSON
class Person {
  constructor(name = "Anonymous", age = "unknown") {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi my name is ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// STUDENT
class Student extends Person {
  constructor(name, age, city, occupation, major) {
    /* Pull from Parent class */
    super(name, age);
    this.city = city;
    this.occupation = occupation;
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their Major is ${this.major}.`;
    }

    return description;
  }
}

// TRAVELLER
class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);

    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` My home location is ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveller(
  "Romero Lijkwan",
  37,
  "Rotterdam",
  "Software developer",
  "Computer Science"
);
console.log(me.getGreeting());

const other = new Traveller("Roswell", 33);
console.log(other.getGreeting());
