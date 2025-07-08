import express from "express";
import { join, __dirname } from "./utils/index.js";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
import authRouter from './src/routes/auth.routes.js';
import bodyParser from "body-parser";
import { authentication } from "./middlewares/auth.middleware.js";

app.use(bodyParser.json());

//Autenticacion de forma global
//app.use(authentication);

//import {db} from "./data/data.js";

const app = express();
app.set("PORT", 3000);

// Middlewares

app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/auth', authRouter);
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use("/api/users",authentication, userRoutes);
app.use("/api/products",authentication, productRoutes);
app.use("/api/categories",authentication, productRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
