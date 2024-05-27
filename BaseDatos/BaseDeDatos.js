import mysql from 'mysql2';

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'jaxito1999',
    database: 'PrograWeb2'

}).promise()

export async function getUsuarios(){
    const [rows]= await pool.query("CALL DML_User('SS', null,'july','j@j.com','j',null, 'Vendedor');");
    return rows;
}

export async function getUsuario(id_user){
    const [rows]= await pool.query("CALL DML_User('S2', ?,'july','j@j.com','j',null, 'Vendedor');",[id_user]);
    return rows[0];
}

export async function insertUsuario( NombreUsuario, Email, Contraseña, Fecha_Nac, Tipo ){
 const [result] = await pool.query("CALL DML_User('I', null, ?, ?, ?, ?, ?);", [NombreUsuario, Email, Contraseña, Fecha_Nac, Tipo]);
  return result.affectedRows;
}

export async function getUsuarioLogin(Email, Contraseña) {
    const [rows] = await pool.query("CALL DML_User('QP', null,'july',?,?,null, 'Vendedor');", [Email, Contraseña]);
    if (rows && rows.fieldCount === 0) {
        return null; // No hay resultados
    } else {
        return rows[0]; // Devuelve el primer resultado si hay alguno
    }
}

/*

const Usuario = await getUsuario(2);
console.log(Usuario);



const Usuarios = await getUsuarioLogin('p@p.com', 'p');
console.log(Usuarios);

const result = await insertUsuario('ert2','ert2','jert2',null, 'Comprador'); 
console.log(result);
*/



