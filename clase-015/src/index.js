import express from "express";
import bodyParser from "body-parser";
import { join, __dirname } from "./utils/index.js";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
import authRouter from './routes/auth.routes.js';


const app = express();
app.set("PORT", 3000);

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/auth', authRouter);

app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use("/api/users", userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/categories", productRoutes);



// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  console.log("Ruta no encontrada 404")
  res.status(404).json({ message: 'Ruta no encontrada' });
});
           

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port https://localhost:${app.get("PORT")}`);
});
