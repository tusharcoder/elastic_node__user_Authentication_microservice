const dotenv = require('dotenv')
dotenv.config();

module.exports={
    ES_ENDPOINT: process.env.ES_ENDPOINT,
    USER_AUTHENTICATION: process.env.ES_ENDPOINT + '/user-authentication',
    DOC_ENDPOINT:'/_doc'
}