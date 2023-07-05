//Configuracion para conectarse con mysql
import * as mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ultima_morada_db',
    port: 3306
})

connection.connect((error) => {
    if (error) {
        console.log('hubo un error: ', error)
    }
    else {
        console.log('Base de datos conectada!')
    }
})

export default connection;

