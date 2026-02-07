// var log = require('./logger.js');

// log('message');

// // console.log(module);

// const os = require('os');

// var totalMem = os.totalmem();
// var freeMem = os.freemem();

// // console.log('Total Memory: ' + totalMem);

// // template string
// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);

// const fs = require('fs');

// fs.readdir('$', function(err, files){
//     if (err) console.log(err);
//     else console.log('Result' + files);
// });

const EventEmitter = require('events');
// const emitter = new EventEmitter();

// Listener
// emitter.on('messageLogged', (arg) => {
//     console.log('listener called', arg);
// });

// // Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'}); // signal that an event has happened

const Logger = require('./logger.js');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('listener called', arg);
});

logger.log('message');
