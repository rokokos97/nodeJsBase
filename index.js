const http = require('http');
const chalk = require('chalk');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.end('hello!!!!');
});
server.listen(port,()=>{
    console.log(chalk.green(`Server hes been started`))
})