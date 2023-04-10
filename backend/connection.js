const mongoose = require('mongoose');  // shortcut for this  statement (req )

const url = 'mongodb+srv://ajaykingh07:Ajay9559@cluster0.5yqfrgo.mongodb.net/myDatabase?retryWrites=true&w=majority' 

mongoose.connect(url)

//stct thenc 
.then((result) => { 
    console.log('Database connected');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports = mongoose; // export statement

