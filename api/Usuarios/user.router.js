const router = require("express").Router();
const {checkToken,rolcheckdoc} = require("../auth/token_validation");

const{login,createUser,getuserbyid } = require("../Usuarios/user.controller");

router.post("/login",login);
router.post("/register",createUser);
router.get("/:id",checkToken,rolcheckdoc,getuserbyid);

module.exports= router;