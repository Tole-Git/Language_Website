var mysql = require('mysql');
var inquirer = require('inquirer');

const mysql_user = {
	host: "localhost",
	port: '3306',
	user: "virtuoso",
	password: "helloworld",
	database: "WOLFGANG"
};

const connection = mysql.createConnection(mysql_user, {
	multipleStatements: true,
});

function query(query) {
	connection.query(query, (error, result) => {
		if (error) {
		console.log(error);
		} else {
		console.log(result);
		}
		inquire();
	});
}

function inquire() {
	inquirer
		.prompt([
		{
			name: 'statement',
			message: 'mysql>',
		},
		])
		.then((answer) => {
		if (answer.statement === 'exit') {
			console.log('Disconnected and exit');
			connection.end();
		} else {
			query(answer.statement);
		}
		});
}

function connect() {
	connection.connect((error) => {
		if (error) {
		console.log(error);
		} else {
		console.log('Connected to SQL');
		inquire();
		}
	});
}

connect();

