// Feature	dependencies	devDependencies
// Purpose	Required for the application to run	Required only during development
// Usage	Used in production	Used for testing, linting, and development tools
// Installation	Installed with npm install	Installed with npm install --only=dev
// Example	Express, Mongoose, React	Jest, ESLint, Webpack

//npm packages

//one-line-jokes
// var oneLinerJoke = require("one-liner-joke");
// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke);

//chalk
import chalk from "chalk";

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));