const events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('data_received', () => {
    console.log('Data received successfully.');
})

eventEmitter.on('connection', () => {
    console.log('Connection successful');

    // Call the listener that registered with this event name 'data_received'
    eventEmitter.emit('data_received');
});
console.log("------------------- Emit connection1 ----------------- ");
eventEmitter.emit('connection');

console.log('Program Ended');


let listener1 = () => {
    console.log('Listener1 executes');
}

let listener2 = () => {
    console.log('Listener2 executes');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

let eventListeners = eventEmitter.listenerCount('connection');

console.log(eventListeners + " Listener(s) listening to connection event");

console.log("------------------- Emit connection2 ------------------- ");
eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);

console.log("--------------- Emit connection3 ------------------------ ");
console.log("Listner1 will not listen now.");
eventEmitter.emit('connection');

let eventListeners2 = eventEmitter.listenerCount('connection');
console.log(eventListeners2 + " Listener(s) listening to connection event");

console.log("Program Ended.");
