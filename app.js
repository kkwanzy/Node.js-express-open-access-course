const express = require ('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 5000;

app.use(morgan('combined'));
app.get("/",(req,res)=>{

    res.send('Hello nong beam');
})

app.listen(port,()=>{
    debug("Moo beam live in the wolrd on port " + chalk.green(port));
})


