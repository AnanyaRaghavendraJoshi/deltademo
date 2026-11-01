const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  
  user: 'root',
  database: 'sqlconnected',
  password: 'Arj@2008*#'
});



