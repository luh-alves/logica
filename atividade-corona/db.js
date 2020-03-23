const sqlite = require('sqlite');
var db = {
    getDb: function () {
       return sqlite.open('./corona.db', { Promise });
    }
}
module.exports = db