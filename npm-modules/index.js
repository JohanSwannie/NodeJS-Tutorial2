const logEvents = require("./logEvents");

const EventEmitter = require("events");
const { setTimeout } = require("timers");

class Emitter extends EventEmitter {}

// Initialize object

const myEmitter = new Emitter();

// Add listener for the log event

myEmitter.on("logger", (msg) => logEvents(msg));

let x = 0;

const logInterval = setInterval(logTimer, 2000);

function logTimer() {
  myEmitter.emit("logger", "Log event emitted!");
}

setTimeout(() => {
  clearInterval(logInterval);
}, 60000);
