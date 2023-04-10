const {Schema, model,Types } = require('../connection');

const mySchema = new Schema( {
user :  {type : types.objectId, ref: 'users'},
title : {type:String, required: true},
category : {type:String, required: true},
content : {type:String, required: true},
subtopic : Array,
role : {type:String, required: true},
createdAt : Date

});

 module.exports= model ( 'contracts', mySchema )
 
 