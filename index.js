import  express  from "express";
import pageRouter from "./routes/page/page-routes.js";

const app = express();

// Middlewares

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// Template Engine
app.set('view engine', 'pug');
app.set('views', './views')

// Carpeta publica
app.use(express.static('public'));

// Routing

app.use('/page', pageRouter)

// Conexion pg
// const {pool, Pool} = require ('pg');

// const pool = new Pool ({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'j1234',
//     database: 'Colegio',
//     port: '5432'
// })

// Port and Initial Server

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor ejecutandose en: http://localhost:${port}`)
})