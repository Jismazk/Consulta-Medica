require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./Usuarios/user.router");
const consRouter = require("./Consultas/consultas.router");



 const cors = require('cors');

        // Enable CORS for all origins (not recommended for production)
        // app.use(cors());

        // Enable CORS for specific origins (recommended)
        const allowedOrigins = ['http://localhost:4200'];
        app.use(cors({
          origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
              const msg = 'The CORS policy does not allow access from this origin.';
              return callback(new Error(msg), false);
            }
            return callback(null, true);
          }
        }));
app.use(express.json());



app.use("/api/users",userRouter);
app.use("/api/Cons",consRouter);

app.listen(process.env.API_PORT,()=>{
console.log("consulta running"+process.env.API_PORT);
}); 