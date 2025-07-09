const pool = require("../../api/conifg/database");
require("dotenv").config();

module.exports = {
    create: (data,callBack) => {
        pool.query(
            'insert into users(email,pass,nombre,apellido,rol) values(?,?,?,?,?)',
            [
                data.email,
                data.pass,
                data.nombre,
                data.apellido,
                data.rol
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
   getuserbyID:(id,callBack)=>{
    pool.query(
      'select email,nombre,apellido,rol from users where id=?',
      [id],
      (error,results,fields)=>{
        if (error){
          callBack(error);
        }
        return callBack(null,results[0]);
      }
    )
   }


}