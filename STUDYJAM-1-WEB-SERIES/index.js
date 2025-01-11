const http = require('http');


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    
    const { method, url}
});

const port = 5000;
const hostname = 'localhost';

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});