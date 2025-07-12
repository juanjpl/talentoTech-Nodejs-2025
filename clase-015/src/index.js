import express from "express";
import bodyParser from "body-parser";
import { join, __dirname } from "./utils/index.js";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
import authRouter from './routes/auth.routes.js';

import { authentication } from "./middlewares/auth.middleware.js";



//Autenticacion de forma global
//app.use(authentication);

//import {db} from "./data/data.js";

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

app.use("/api/users",authentication, userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories",authentication, productRoutes);

app.use((req,res,next)=>{
  console.log("404 page not found.");
  res.write("Page not found. Error 404.");
  res.end();
})

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
