var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Sean',
  sayHi: () => {
    console.log(arguments); // no arguments
    console.log(`Hi. I'm ${this.name}`) // no this binding
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`)
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
