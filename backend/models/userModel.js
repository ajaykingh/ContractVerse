const {Schema, model} = require('../connection');

const mySchema = new Schema( {
name : {type:String, required: true},
email : {type:String, required: true},
password : {type:String, required: true},
avatar : String,
role : {type:String, required: true},
createdAt : Date

});

model ( 'users', mySchema )
 
 