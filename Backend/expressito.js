import express from "express";
import morgan from "morgan";

import cors from "cors";


const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors({
    origin: 'http://localhost:5173'
  }));

app.use(morgan('dev'));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hey que tal");
})



app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "PRUEBA" && password === "TILIN") {
        res.status(200).send();
    } else {
        res.status(403).send();
    }
});

console.log("Escuchando el puerto 3000");
app.listen(3000);
