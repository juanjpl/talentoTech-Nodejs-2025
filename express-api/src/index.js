import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

//settings
const app = express();
app.set("PORT",5000);

//middleware
app.use(express.json());

app.use(cors());

//routes
app.use("/api/users", userRoutes)
//listener
//app.listen(5000, ()=> console.log("Servidor corriendo!"));

app.listen("PORT", ()=> console.log("Servidor corriendo! " + `${app.get("PORT")}`));