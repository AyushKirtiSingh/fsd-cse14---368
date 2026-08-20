import http from "http";

const server = http.createServer();
server.on('request',(req,res) => {
       res.write("Welcome to Server Side Programmming");
       res.end();
})

server.listen(5000,()=>{
    console.log("Server is running");
});
