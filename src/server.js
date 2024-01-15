import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connection from "./config/connectDB"
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

configViewEngine(app);

connection();

initWebRoutes(app);

app.listen(PORT, () => {
    console.log('Services Store run in ' + PORT)
})