import sql from 'mysql2';

export const  db=sql.createConnection({
    host: 'localhost',
    user:'root',
    password:'waseem@2002',
    database:'SocialMedia'
});

 // this data mysql2 is working fine. 