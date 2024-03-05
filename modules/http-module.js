const http=require('http');
const server=http.createServer((req,res)=>{
    // res.write('Welcome to our homepage');
    // res.end();
    if(req.url==='/'){
        res.end('Welcome to our homepage');
        return;
    }
    if(req.url==='/about'){
        res.end('Here is our short history');
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for.</p>
    <a href='/'>Back Home</a>
    `)
});
server.listen(5000);