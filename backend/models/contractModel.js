const {Schema, model,Types } = require('../connection');

const mySchema = new Schema( {
user :  {type : types.objectId, ref: 'users'},
name : {type:String, required: true},
email : {type:String, required: true},
password : {type:String, required: true},
avatar : String,
role : {type:String, required: true},
createdAt : Date

});

 module.exports= model ( 'contracts', mySchema )
 
 