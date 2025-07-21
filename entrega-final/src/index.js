
import express from "express";
import bodyParser from "body-parser";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
import authRouter from './routes/auth.routes.js';
import { envs } from "./config/index.js";
//import {db} from "./config/db.js";

//import { authentication } from "./middlewares/auth.middleware.js";

//Autenticacion de forma global
//app.use(authentication);

const app = express();
app.set("PORT", envs.port || 5000);
console.log(envs.port )

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use('/auth', authRouter);
app.use("/api/products",productRoutes);

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  console.log("Ruta no encontrada 404")
  res.status(404).json({ message: 'Ruta no encontrada' });
});
           

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
