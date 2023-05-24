const {Schema, model,Types } = require('../connection');

const mySchema = new Schema( {
user :  {type : types.objectId, ref: 'users'},
name : {type:String, required: true},
createdAt : Date

});

 module.exports= model ( 'contracts', mySchema )
 