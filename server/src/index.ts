// import { conexion } from './conexion';
import * as bodyParser from 'body-parser';

import express from 'express';

const port = (process.env.port || 3000); //Recupera el puerto donde esta trabajando el servidor

//Configurar el express
const app = express();
app.use(bodyParser.json());

//Configurar puerto:
app.set('port', port);

//Configurar tipos de datos admitidos (para la query insert into):
app.use(express.json())

//Configurar rutas:
app.use('/api', require('./routes/rutas'));

// Lógica para obtener datos de MySQL
app.get('/api', (req, res) => {

});

//Iniciar express:
app.listen(port, (error?: Error) => {
    if (error) {
        console.log('Hubo un error al iniciar el servidor :(');
    } else {
        console.log('Servidor iniciado en el puerto:', port);
    }
});

//Para iniciar el server con la db conectada, posicionarse en:
//C:\Users\Usuario\Desktop\html-css\angular-project\server\src>
//Luego hacer un npm run dev (ahora si funciona :D cambie una ruta en el package.json)

//Al iniciar angular con ng serve -o, la direccion del localhost es 4200.
//Usar http://localhost:3000/api/?

//Para instalar las dependencias, posicionarse en /server
//npm i --save-dev nodemon
//npm i express mysql

//Ademas de las dependencias, hacer un:
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';