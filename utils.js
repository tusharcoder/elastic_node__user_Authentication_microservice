const moment= require('moment')

const utils = class{
    static current_timestamp = function(){
        return moment(Date.now()).format('YYYY-MM-DDTHH:MM:SS')
    }
}

module.exports = utils