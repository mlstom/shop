const mysql = require('mysql2/promise')

export default async function database(){
    return await mysql.createConnection({
        host:'sql.freedb.tech',
        user:'freedb_probicaaa',
        password:'tQBWVt%qTVr%?4H',
        database:'freedb_probilenzi',
        port:3306
    })
}