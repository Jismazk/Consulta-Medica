const router = require("express").Router();
const {checkToken,rolcheckdoc} = require("../auth/token_validation");
const {getconsulta} = require("../Consultas/consultas.controller");

router.use(checkToken);

router.get("/:id",getconsulta);
//router.post("/regcon")

module.exports=router;