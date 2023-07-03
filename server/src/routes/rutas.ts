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
            res.json({ status: 'Tipo de  piedra agregada!' })
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
            res.json({ status: 'Equipo eliminado!' })
        }
    })
})

// Modificar un dato de la tabla empelado (UPDATE):
router.post('/Rut', (req, res) => {
    const { Rut, Nombre, Apellido, Direccion, Telefono, Sueldo, Antiguedad, Tipo_trabajo } = req.body
    console.log(Rut)
    let sql = `UPDATE empleado SET Nombre = '${Nombre}', Apellido = '${Apellido}', Direccion = '${Direccion}', Telefono = '${Telefono}', Sueldo = '${Sueldo}', Antiguedad = '${Antiguedad}', Tipo_trabajo = '${Tipo_trabajo}' WHERE Rut = '${Rut}';`
    conexion.query(sql, (err: mysql.MysqlError | null, rows?: any, fields?: mysql.FieldInfo[]) => {
        if (err) throw err;
        else {
            res.json({ status: 'Tipo de  piedra agregada!' })
        }
    })
})
// Modificar un dato de la tabla tipo_piedra(UPDATE):
// router.put('/:id', async (req, res) => {
//     // ILL UPDATE THIS WHENEVER THIS WORKS !!!!
//     try {
//         const { id } = req.params;
//         const body = await req.body;

//         console.log(id)
//         console.log(req.body)

//     } catch (error) {
//         console.error('Error ' + error)
//     }


//     // const { id } = req.params;
//     // console.log(req.body);
//     // let sql = `UPDATE tipo_piedra
//     //             SET nombre_piedra = ${Dato.nombre_piedra}
//     //             WHERE id_tipo_piedra = ${id};`
//     // conexion.query(sql, (err: mysql.MysqlError | null, rows?: any, fields?: mysql.FieldInfo[]) => {
//     //     if (err) throw err;
//     //     else {
//     //         res.json({ status: 'Tabla modificada exitosamente!' })
//     //     }
//     // })
// });

//Exportar la ruta:
module.exports = router;