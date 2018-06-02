const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require("./config-local.json");
const app = express();
const session = require('express-session');
const userRouter = require('./modules/api/users/router');
const authRouter = require('./modules/api/auth/route');



app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(
    session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: config.secureCookie,
            maxAge: 12 * 60 * 60 * 1000
        }
    })
);

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.get('/', (req, res) => {
    res.send("OK");
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));



mongoose.connect(config.mongoPath, err => {
    if (err) console.error(err);
    else console.log("Database connect successful");
});

const port = process.env.port || 1105;

app.listen(port, err => {
    if (err) console.log(err);
    console.log("Server started at port " + port);
});
