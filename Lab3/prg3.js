import http from 'http'

const server = http.createServer((req,res)=>{
    if(http.url=='/'){
        res.end('<h1>Home Page</h1>');
    }
    else if(http.url=='/about'){
        res.end("<h2>About us Page</h2>");
    }
    else if(http.url=='/product'){
        res.end(`<h1>Mobile Phone</h1>
                 <h2>Price: 25000</h2>
                 <p>Discout: 5%</p>
                 <a href='#'>Buy Now</a>
                 `);
    }
    else {
        res.statusCode = 404;
        res.end(`
            <h1>404, Not found</h1>
            <p>Page Not found <p>

            `)
    }
    console.log("welcome to the club");
})

server.listen(4444,()=> console.log("Server is intitalizing"));