import bcryptjs from 'bcryptjs';
import { pool } from '../db/database.js';
import { createAccessToken } from '../libs/jwt.js';
export const cargarInformacion = async (req, res) => {
  try {
    const { nombreempresa } = req.body;
    const file = req.file;
    res.send("Nombre de la empresa: " + nombreempresa + " File: " + file);
    //Construimos la url de la imagen utilizando la ruta local del servidor
  } catch (error) {

  }
}
export const register = async (req, res) => {
  try {
    const { username, correo, contrasena } = req.body;
    const hash = await bcryptjs.hash(contrasena, 10) //String cualquiera
    const crearUsuarioQuery = 'INSERT INTO usuarios (username, correo, contrasena) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(crearUsuarioQuery, [username, correo, hash]);
    /*res.json({
        nombreempresa,
        imagenUrl,
        idEmpresa: result.rows[0].idempresa  // Agrega cualquier otra información que necesites enviar
      });*/
    //res.send(`Registrando: ${result}`);
    
    /*res.json({
      username, correo
    })*/
    const token = await createAccessToken({ username })
    res.cookie('token', token)
    res.json({
      username: result.username,
      correo: result.correo,
      contrasena: result.contrasena

    })
  } catch (error) {
    console.log(error);
  }
}
export const login = (req, res) => {
  res.send("Login")
}