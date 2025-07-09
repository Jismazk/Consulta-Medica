require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./Usuarios/user.router");
const consRouter = require("./Consultas/consultas.router");

app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/Cons",consRouter);

app.listen(process.env.API_PORT,()=>{
console.log("consulta running"+process.env.API_PORT);
}); 