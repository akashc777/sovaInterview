//Dependencies
const http = require('http');

// require('dotenv').config();

const app = require('./app'); 


const server = http.createServer(app);

const PORT = process.env.PORT || 8000

async function startServer(){

    server.listen(PORT, ()=>{
        console.log(`listening on ${PORT}`);
    });
}

startServer();

