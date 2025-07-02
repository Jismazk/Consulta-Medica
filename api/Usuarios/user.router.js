const router = require("express").Router();
const {checkToken} = require("../auth/token_validation");

const{login,createUser } = require("../Usuarios/user.controller");

router.post("/login",login);
router.post("/register",createUser);

module.exports= router;