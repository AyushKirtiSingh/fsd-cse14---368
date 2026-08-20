import http from "http";

const server = http.createServer((req,res)=> {
    res.end("<h1 style = color:blue;>Welcome to Server Side</h1>");
});

server.listen(5000,()=>{
    console.log("Server is running");
});
