// handlers.js

const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Raghul@123',
    database: 'healthcare',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


// Route handler to handle POST requests to add user data
function addUser(req, res) {
    // Extract data from the request body
    console.log("jjjj", req.body)
    const { username, password, email, phone } = req.body;

    // Query to insert user data into the database
    const sql = 'INSERT INTO user_info (username, password, email, phone) VALUES (?, ?, ?, ?)';
    const values = [username, password, email, phone];

    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Error connecting to database", err);
            return;
        }

        connection.query(sql, values, (err, result) => {

            connection.release();
            if (err) {
                console.error('Error adding user to database:', err);
                res.status(500).send('Error adding user to database');
                return;
            }
            console.log('User added to database', result);
            res.status(200).send('User added to database');
        });

    })
    // Execute the query

}

module.exports = {
    addUser
};
