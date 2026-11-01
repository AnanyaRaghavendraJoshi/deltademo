const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sqlconnected',
    password: 'Arj@2008*#'
});

connection.query("SHOW TABLES", (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    });
