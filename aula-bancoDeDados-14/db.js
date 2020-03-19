const sqlite = require('sqlite');
var db = {
    getDb: function () {
       return sqlite.open('./carros.db', { Promise });
    }
}
module.exports = db