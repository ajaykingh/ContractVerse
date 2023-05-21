const {Schema, model,Types } = require('../connection');

const mySchema = new Schema( {
name : {type:String, required: true},
category : {type:String, required: true},
content : {type:String, required: true},
subtopic : Array,
createdAt : Date

});

 module.exports= model ( 'content', mySchema )
 
 