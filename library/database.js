let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost',
   user:        'zuhri',
   password:    'pens',
   database:    'db_ayunda'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 })

module.exports = connection;