const{create,getUserByUserEmail,getuserbyID} = require("../Usuarios/user.service")

const {hashSync,genSaltSync,compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");

module.exports = {
    createUser : (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.pass = hashSync(body.pass,salt);
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    message : "database connection error"
                });
            }
            return res.status(200).json({
                data: results 
            });
        });
    },
    login:(req,res) =>{
        const body =  req.body;
        getUserByUserEmail(body.email,(err,results)=>{
            if (err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    data:"invalid email or password"
                });
            }
            const result = compareSync(body.pass, results.pass);
            if(result){
                results.pass = undefined;
                const jsontoken = sign({
                    result : results
                },process.env.JWT_KEY,{
                    expiresIn: "1h"
                });
                return res.status(200).json({
                 message: "login suseccful",
                 token: jsontoken   
                });
            }else{
                return res.json({
                    message: "invalid email or password"
                });
            }
        });

    },
    getuserbyid:(req,res)=>{
        const id = req.params.id;
        getuserbyID(id,(err, results)=>{
            if(err){
                console.log(err);
            }if(!results){
                return res.json({
                  message:"usuario no encontrado"  
                });   
            }
            return res.json({
                data:results
            })
        });

    }
}