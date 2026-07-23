const f1 = () => {
    console.log("f1 start");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};
const f2 = () => {
    console.log("f2 start");
    f3();
    console.log("f2 running");   //in asychronous we use eventloop to manage the call stack
    console.log("f2 end");
};
const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");  // Asynchronous call using timers 
    // 1. setTimeOut
    // 2. setImmediate
    // 3. process.nextTick
    // 4. setInternal
    console.log("f3 stops");
};

function main() {
    console.log("main starts");
    f1();
    // console.log("main running");
    console.log("main ends");
}
main();