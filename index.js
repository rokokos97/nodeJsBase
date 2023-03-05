const http = require('http');
const chalk = require('chalk');
const fs = require('fs/promises');
const path = require('path');
const port = 3000;
const basePath = path.join(__dirname, "pages")
const server = http.createServer(async (req, res) => {
    if (req.method === "GET"){
        const content = await fs.readFile(path.join(basePath, "index.html"));
        res.end(content);
    }
});
server.listen(port,()=>{
    console.log(chalk.green(`Server hes been started`))
})