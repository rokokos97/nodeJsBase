const http = require('http');
const chalk = require('chalk')
const port = 3000;
const server = http.createServer(() => {});

server.listen(port, ()=>{
    console.log(chalk.green(`Server has been started on port ${port}...`))
});