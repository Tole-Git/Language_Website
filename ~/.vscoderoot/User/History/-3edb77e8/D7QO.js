var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	port: '3306',
	user: "virtuoso",
	password: "helloworld",
	database: "WOLFGANG"
});


// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// });

con.connect(function(err) {
	if (err) throw err;
	con.query("SELECT Name, Definition FROM Java", function (err, result, fields) {
	  if (err) throw err;
	  console.log(fields);
	});
  });

