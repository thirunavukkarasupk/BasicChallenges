const getRandomInBetween = () => Math.floor(Math.random()*15);
const getHexChar= () => getRandomInBetween().toString(16);
const getHexString = (length) => Array(length).fill(null).map(getHexChar).join("");
let uuidFormat=[8,4,4,4,12];
const getRandomString = () => uuidFormat.map(getHexString);
console.log("randomlyGeneratedString--->",getRandomString().join("-"));


