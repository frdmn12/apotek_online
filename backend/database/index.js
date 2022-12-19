const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bayu1212",
  database: "apotek_online",
  port: 3306,
});

module.exports = db;


db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err);
      return;
    }
  
   console.log('connected as id ' + db.threadId);
  });