const express = require('express');
const app = express();
const routes = require('./routes');
// const dbconnect = require('./dbconnect');
const utils = require('./utils');

const querystring = require('querystring');
const {Curl} = require('node-libcurl');
let port = process.env.PORT || 3000;

app.use('/api/v1', routes);
app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}...`)
});

/* sample API */
app.get('/foo/',(req, res)=>{
    res.json({
        'foo':'bar'
    })
});

app.post('/register/',(req, res)=>{
    // registration_data = {
    //     'first_name':req.body.first_name,
    //     'last_name':req.body.last_name,
    //     'password':req.body.password,
    //     'email':req.body.email,
    //     'username':req.body.username,
    //     created_at: utils.current_timestamp,
    //     updated_at: utils.current_timestamp
    // }
    registration_data = {
        'first_name':'Tushar1',
        'last_name':'Agarwal1',
        'password':'123456',
        'email':'tushar.agarwal1@somewhere.com',
        'username':'tusharagarwal1',
        'created_at': utils.current_timestamp(),
        'updated_at': utils.current_timestamp()
    }
    const curlTest = new Curl()
    const terminate = curlTest.close.bind(curlTest);
    curlTest.setOpt(Curl.option.URL,'http://localhost:9200/user-authentication/_doc/');
    curlTest.setOpt(Curl.option.HTTPHEADER,['Content-Type: application/json']);
    curlTest.setOpt(Curl.option.POST, true);
    curlTest.setOpt(
        Curl.option.POSTFIELDS,
        JSON.stringify(registration_data)
    );
    curlTest.on("end", function (statusCode, data, headers) {
        console.info("Status code " + statusCode);
        console.info("***");
        console.info("Our response: " + data);
        console.info("***");
        console.info("Length: " + data.length);
        console.info("***");
        console.info("Total time taken: " + this.getInfo("TOTAL_TIME"));
    
        this.close();
    });
    curlTest.on("error", terminate);
    curlTest.perform();
    return res.json({
        'message':'OK'
    })
});
