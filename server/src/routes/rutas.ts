import { Router } from 'express';
const router = Router();
import conexion from '../conexion';
import * as mysql from 'mysql';

//Asignar todas las rutas (y peticiones de cliente):
//Cada router.get() equivale a una query de mysql
//---------------------------------------------------

//Listar todos los empleados (READ):
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM empleado ORDER BY Rut'
    conexion.query(sql, (err: mysql.MysqlError | null, rows?: any, fields?: mysql.FieldInfo[]) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//Listar un tipo de piedra (segun su id):
router.get('/:rut', (req, res) => {
    const { rut } = req.params
    let sql = `SELECT * FROM empleado WHERE Rut = ${rut}`
    conexion.query(sql, [rut], (err: mysql.MysqlError | null, rows?: any, fields?: mysql.FieldInfo[]) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//agregar empleado (INSERT):
router.post('/', (req, res) => {
    const { Rut, Nombre, Apellido, Direccion, Telefono, Sueldo, Antiguedad, Tipo_trabajo } = req.body
    console.log(Rut)
    let sql = `INSERT INTO empleado (RUT, Nombre, Apellido, Direccion, Telefono, Sueldo, Antiguedad, Tipo_trabajo) VALUES ('${Rut}', '${Nombre}', '${Apellido}', '${Direccion}', '${Telefono}', '${Sueldo}', '${Antiguedad}', '${Tipo_trabajo}');`
    conexion.query(sql, (err: mysql.MysqlError | null, rows?: any, fields?: mysql.FieldInfo[]) => {
        if (err) throw err;
        else {
            res.json({ status: 'Emplead@ ' + Nombre + ' agregado!!' })
        }
    })
})

//Eliminar empleado (DELETE):
router.delete('/:RUT', (req, res) => {
    const { RUT } = req.params
    let sql = `DELETE FROM empleado WHERE rut = '${RUT}';`
    conexion.query(sql, (err: mysql.MysqlError | null, rows?: any, fields?: mysql.FieldInfo[]) => {
        if (err) throw err;
        else {
            res.json({ status: 'Empleado eliminado.' })
        }
    })
})

// Modificar un dato de la tabla empelado (UPDATE):
router.put('/', (req, res) => {
    const { Rut, Nombre, Apellido, Direccion, Telefono, Sueldo, Antiguedad, Tipo_trabajo } = req.body
    let sql = `UPDATE empleado SET Nombre = '${Nombre}', Apellido = '${Apellido}', Direccion = '${Direccion}', Telefono = '${Telefono}', Sueldo = '${Sueldo}', Antiguedad = '${Antiguedad}', Tipo_trabajo = '${Tipo_trabajo}' WHERE Rut = '${Rut}';`
    conexion.query(sql, (err: mysql.MysqlError | null, rows?: any, fields?: mysql.FieldInfo[]) => {
        if (err) throw err;
        else {
            res.json({ status: 'Datos de ' + Nombre + ' actualizados!' })
        }
    })
})

//Exportar la ruta:
module.exports = router;