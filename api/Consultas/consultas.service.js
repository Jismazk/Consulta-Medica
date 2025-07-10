const pool = require("../../api/conifg/database");
require("dotenv").config();

module.exports={
    usercon: (id,callBack)=>{
        pool.query(
            'select * from Consulta where id = ?',
            [id],
            (err,results,fields)=>{
                if(err){
                    return callBack(err);
                }
                return callBack(null,results);
            }
        )
    },

};