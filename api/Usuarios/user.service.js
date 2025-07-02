const pool = require("../../api/conifg/database");
require("dotenv").config();

module.exports = {
    create: (data,callBack) => {
        pool.query(
            'insert into users(email,pass) values(?,?)',
            [
                data.email,
                data.pass
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


}