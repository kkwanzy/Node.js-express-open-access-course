const express = require ('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/Public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/",(req,res)=>{

    res.render('index',{username: 'moo Kwan so hot', customer: ["a","b","c"]});
})

app.listen(PORT,()=>{
    debug("Moo beam live in the world on port " + chalk.green(" : "+PORT));
})


