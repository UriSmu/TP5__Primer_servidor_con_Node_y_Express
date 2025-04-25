import express from "express";
import Time from "./time.js";

const app = express();

app.get('/', (req, res) =>
{
    res.send("Bienvenidos a mi programa");
})

app.get('/fecha-completa', (req, res) => {
    res.send(Time.fechaCompleta())
})

app.get('/hora', (req, res) => {
    res.send(Time.horas())
})

export default app;