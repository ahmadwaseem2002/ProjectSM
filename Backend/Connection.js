//import mysql from 'mysql2';
const sql = require('mysql2');

export const Database=sql.createConnection({
    host: 'localhost',
    user:'root',
    password:'waseem@2002',
    database:'SocialMedia'
});

 // this data mysql2 is working fine. 