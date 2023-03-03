const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), `yyyyMMdd\tHH:mm:ss`)}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    await fsPromises.appendFile(
      path.join(__dirname, "log-events", "eventLog.txt"),
      logItem,
      "utf8"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
