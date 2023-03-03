const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(`Date & time is - ` + format(new Date(), `yyyyMMdd\tHH:mm:ss`));

const ID1 = uuid();
const ID2 = uuid();
const ID3 = uuid();

console.log(`ID1 = ${ID1}`);
console.log(`ID2 = ${ID2}`);
console.log(`ID3 = ${ID3}`);
