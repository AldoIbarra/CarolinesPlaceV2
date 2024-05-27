import express from "express";
import morgan from "morgan";

import cors from "cors";
import{getUsuarios, getUsuario, insertUsuario, getUsuarioLogin} from '../BaseDatos/BaseDeDatos.js';


const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors({
    origin: 'http://localhost:5173'
  }));

app.use(morgan('dev'));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hey que tal");
});

// Select para los datos de un usuario
app.get("/Usuarios/:id", async (req, res) => {
    try {
        const id_user = req.params.id
        const Usuario = await getUsuario(id_user);
        res.send(Usuario);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener usuario');
    }
});

//Me trae todos los usuarios
app.get("/Usuarios", async (req, res) => {
    try {
        const Usuarios = await getUsuarios();
        res.send(Usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener usuarios');
    }
});

//Select donde el email y pass coincida, si encuentra algo 200, si no 403
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await getUsuarioLogin(email, password);
        if (usuario && Object.keys(usuario).length !== 0) {
            res.status(200).send(usuario);
        } else {
            res.status(403).send('Credenciales incorrectas');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al iniciar sesión');
    }
});

app.post("/signup", async (req, res) => {
    const { nombreUsuario, email, contraseña, fechaNac, tipo } = req.body;
    try {
      // Inserta el nuevo usuario en la base de datos
      const affectedRows = await insertUsuario(nombreUsuario, email, contraseña, fechaNac, tipo);
      // Verifica si la inserción fue exitosa
      if (affectedRows > 0) {
        res.status(201).send('Usuario registrado exitosamente');
      } else {
        res.status(500).send('Error al registrar usuario');
      }
    } catch (error) {
      console.error(error);
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(400).send('El correo electrónico ya está registrado');
      } else {
        res.status(500).send('Error al registrar usuario');
      }
    }
  });
  

console.log("Escuchando el puerto 3000");
app.listen(3000);
