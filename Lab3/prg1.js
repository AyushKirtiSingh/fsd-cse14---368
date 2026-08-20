import { log } from "console";
import http from "http";

const server = http.createServer((req,res) => {
    console.log('Welcomme to Node JS');
    console.log(req.url);
    console.log("Request Method");

    console.log(req.method);

    console.log('Request Header');
    console.log(req.headers);
    console.log("Socket Info");
    console.log(req.socket);

    console.log(req.headers.host);
    
    res.end("hello ji");
    
});




const PORT = 3690;
server.listen(PORT,()=>{
    console.log("Hi the server is running");
    
})