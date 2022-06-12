const express = require("express");
const mysql = require("mysql");

// Create Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Wolfgang"
});

// Connect to MySQL
db.connect(err => {
    if(err) {
        throw err;
    }
    console.log("MySQL is Connected");
});

const app = express();

// Create Database
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE Wolfgang";
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send("Database Created");
    });
});

// Create Table
app.get("/createLanguageIndex", (req, res) => {
    let sql = "CREATE TABLE IF NOT EXISTS LanguageIndex (`Language` VARCHAR(255) NOT NULL, `References` INT NOT NULL AUTO_INCREMENT, UNIQUE INDEX `idnew_table_UNIQUE` (`Language` ASC) VISIBLE, PRIMARY KEY (`References`), UNIQUE INDEX `References_UNIQUE` (`References` ASC) VISIBLE)";
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('LanguageIndex table created');
    });

});
/*
// Insert LanguageIndex
app.get('/employee1',(req,res) => {
    let post = {}
    let sql = 
});
*/
app.listen('81', () => {
    console.log('Server Started on port 81')

}) 