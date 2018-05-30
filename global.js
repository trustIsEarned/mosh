global.console.log(); //global scope;

setTimeout(); //global scope

clearTimeout();
setInterval();

let message = ""; //not added to global object, there is no winow object.  only scoped to this file.
global.clearInterval();

