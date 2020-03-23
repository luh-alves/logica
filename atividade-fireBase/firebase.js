//conexao firebase

var admin = require("firebase-admin");
var serviceAccount = require('./luciana-curso-firebase-adminsdk-lkmd9-1cf4a36c12')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://luciana-curso.firebaseio.com"
});




module.exports = admin
