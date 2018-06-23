
//connect to our MySQL database
var mysql = require("mysql");

// Using env and keys to protect database information.
require("dotenv").config();
var keys = require("./../key");

var host_name = keys.host.host_name;
var port_number = keys.host.port_number;
var root_user = keys.host.root_user;
var database_password = keys.database.password;
var database_name = keys.database.name;

// creating database connection.
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: host_name,
    port: port_number,
    user: root_user,
    password: database_password,
    database: database_name
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export for orm use.
module.exports = connection;