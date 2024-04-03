import express from "express";
import router from "./routes/index.routes.js";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza esto con la URL de tu aplicación frontend
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Encabezados permitidos
  }));

app.get('/', (req, res) => {
    res.send('Acortador Url backend')
})

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

//Conección a mongoDB
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
    dbName: 'url-shortener',
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(error => {
    console.error("Error connecting to MongoDB:", error);
});


