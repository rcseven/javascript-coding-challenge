class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} I'm Ready.`);
  }
}

class Boy extends Human {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  work() {
    console.log(`${this.name} lesssgo!`);
  }
}

const human = new Human("Ryan", 22);
human.speak();

const boy = new Boy("Christopher", 22, "Developer");
boy.speak();
boy.work();
