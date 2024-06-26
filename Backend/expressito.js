import express from "express";
import morgan from "morgan";
import session from "express-session";

import cors from "cors";
import{getUsuarios, getUsuario, insertUsuario, getUsuarioLogin} from '../BaseDatos/BaseDeDatos.js';


const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors({
    origin: 'http://localhost:5173',
         credentials: true
  }));

app.use(morgan('dev'));
app.use(express.json());

app.use(session({
  secret: '123', 
  resave: false,
  saveUninitialized: true
}));


app.get("/", (req, res) => {
console.log(req.session)
    res.send(`Hey que tal${req.session.usuario}--${req.session.tipo}`);
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


// Select para el carrito
app.get("/Carrito/:id", async (req, res) => {
  try {
      const id_user = req.params.id
      const Lista = await getListaCarrito(id_user);
      res.send(Lista);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener lista');
  }
});

//Select donde el email y pass coincida, si encuentra algo 200, si no 403
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await getUsuarioLogin(email, password);
    if (usuario && Object.keys(usuario).length !== 0) {
      req.session.usuarioId = usuario[0].id_user; 
      req.session.tipo = usuario[0].Tipo;
      console.log("ID de usuario en sesión:", req.session.usuarioId);
      console.log("Tipo de usuario en sesión:", req.session.tipo);
      // Envía las variables de sesión como parte de la respuesta
      res.status(200).json({
        usuarioId: req.session.usuarioId,
        tipo: req.session.tipo
      });
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
