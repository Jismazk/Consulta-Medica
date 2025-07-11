const {usercon} = require("../Consultas/consultas.service");

module.exports={
    getconsulta: (req,res) => {
        const id = req.params.id;
        usercon(id,(err,results)=>{
            if(err){
                console.error(err);
            }
            return res.json({
                data:results
            })
        })
    }
}