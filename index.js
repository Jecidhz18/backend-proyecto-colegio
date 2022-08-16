import  express  from "express";
import pageRouter from "./routes/page/page-routes.js";

const app = express();

// Template Engine
app.set('view engine', 'pug');
app.set('views', './views')

// Carpeta publica
app.use(express.static('public'));

// Routing

app.use('/page', pageRouter)

// Port and Initial Server

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor ejecutandose en: http://localhost:${port}`)
})