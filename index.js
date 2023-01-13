const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmmiter extends EventEmitter {};


// init object
const myEmitter = new MyEmmiter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);