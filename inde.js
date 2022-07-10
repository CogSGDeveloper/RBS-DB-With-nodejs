var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'database-1.cgnz8tkdfkk9.us-west-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'admin',
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();