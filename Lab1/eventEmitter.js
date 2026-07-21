import {EventEmitter} from 'node:events'

const sayHi = (name)=> {
    console.log(`${name} logged in`)
}

const task = new EventEmitter();
task.once("greet" , ()=>{
    console.log("System started")
});

task.once("exit" , (name)=>{
    console.log(`System shutdown by ${name}`)
});


task.on("greet",sayHi);
task.on("greet",(name)=>{
    console.log(`${name} starts working`)
});

task.on("greet",(name)=>{
    console.log(`${name} stop working`)
});

task.emit("greet","Rahul Singh");
console.log();
task.emit("greet","Manish Sinha");
task.off("greet",sayHi);
console.log();
task.emit("greet","Mukesh Gupta");
console.log();
task.emit("exit", "Manager")    //execute only once
task.emit("exit", "Employee");  // won't affect

console.log("total listener",task.listenerCount("greet"));
task.removeAllListeners("greet");