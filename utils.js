const {Curl} = require('node-libcurl');
const moment= require('moment');

const utils = class{
    static current_timestamp = function(){
        return moment(Date.now()).format('YYYY-MM-DDTHH:MM:SS')
    }

    static curl__post = function(endpoint, post_data){
        
    const curlTest = new Curl()
    const terminate = curlTest.close.bind(curlTest);
    curlTest.setOpt(Curl.option.URL,endpoint);
    curlTest.setOpt(Curl.option.HTTPHEADER,['Content-Type: application/json']);
    curlTest.setOpt(Curl.option.POST, true);
    curlTest.setOpt(
        Curl.option.POSTFIELDS,
        JSON.stringify(post_data)
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
    }
}

module.exports = utils