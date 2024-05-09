import express from "express";
import router from "./routes/index.routes.js";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";
import initializePassport from "./config/passport.js";
import passport from "passport";
import session from "express-session";

const app = express();
const PORT = 3001;

app.use(express.json());

//MIDDLEWARE CORS
app.use(cors({
    origin: 'https://simple-url-cristianmozetich-cristians-projects-df8cf536.vercel.app/, localhost:3000', // Reemplaza esto con la URL de tu aplicación frontend
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Encabezados permitidos
  }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//MIDDLEWARE PASSPORT
initializePassport();
app.use(passport.initialize());
app.use(passport.session());


app.use('/', router);

app.get('/', (req, res) => {
    res.send('Acortador Url backend')
})

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




