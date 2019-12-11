// var Schema = require('mongoose').Schema;
// var db = require('./dbConnection');

// var UserSchema = Schema({
//     "FISCAL_QTR_NAME": String,
//     "firstName": String,
//     "lastName": String,
//     "email": String,
//     "password": String,
//     "username": String
// }, {
//         collection: 'user'

//     });

// var UserModel = db.model('UserModel',
//     UserSchema);

// module.exports = UserModel;

select max salary  from employee where salary not in 
(select max salary from  employee )


