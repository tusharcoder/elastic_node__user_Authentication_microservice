const express = require('express');
const app = express();
const routes = require('./routes');
// const dbconnect = require('./dbconnect');
const utils = require('./utils');
const {Curl} = require('node-libcurl');
//for reading json from request
const body_parser = require('body-parser');
const { USER_AUTHENTICATION, DOC_ENDPOINT } = require('./config');
app.use(body_parser.json())

let port = process.env.PORT || 3000;
// will use this for elasticsearch cient in future
// app.use('/api/v1', routes);
app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}...`)
});

app.post('/register/',(req, res)=>{
    registration_data = {
        'first_name':req.body.first_name,
        'last_name':req.body.last_name,
        'password':req.body.password,
        'email':req.body.email,
        'username':req.body.username,
        'created_at': utils.current_timestamp(),
        'updated_at': utils.current_timestamp()
    }
    utils.curl__post(USER_AUTHENTICATION+DOC_ENDPOINT, registration_data)
    return res.json({
        'message':'OK'
    })
});
// NEED MORE APIs
// CHANGE PASSWORD
// FORGET PASSWORD
// LOGIN
// LOGOUT