const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to our Home Page");
    }
    if(req.url === '/about'){
        res.end("Here is a short history");
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page your are looking for</p>
    <a href="/">back home</a>`);
});

server.listen(5000);