const mysql=require('mysql2/promise');

const conexion=mysql.createPool({
    host:'localhost', //127.0.0.1
    port:3306,
    database:'dmediavilla_2doP',
    user:'root',
    password:'2826'
})

module.exports=conexion;