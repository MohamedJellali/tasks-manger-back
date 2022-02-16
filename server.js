const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');
const connectDB = require("./app/config/connectDB");

app.use(useragent.express());
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//connect the DB
connectDB();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', require('./app/routes/api')());

app.get('/', (req, res) => {
    res.send('backend connected');
});

app.listen(3001, () => {
});
