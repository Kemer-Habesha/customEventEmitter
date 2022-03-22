// Greeter
const Greeter = require("./greeter");

const g = new Greeter("Nebyu");

g.on("hey", function (data) {
  console.log(`Hey ${data}`);
});

g.sayHi();
