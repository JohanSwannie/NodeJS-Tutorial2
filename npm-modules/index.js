const logEvents = require("./logEvents");

const EventEmitter = require("events");
const { setTimeout } = require("timers");

class MyEmitter extends EventEmitter {}

// Initialize object

const myEmitter = new MyEmitter();

// Add listener for the log event

myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted!");
}, 5000);
