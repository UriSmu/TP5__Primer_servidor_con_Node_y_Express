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
    res.send(Time.hora())
})

app.use((req, res, next) => {
    res.status(404).send('<img src="https://http.cat/404.jpg" alt="404 Not Found" />');
});


export default app;