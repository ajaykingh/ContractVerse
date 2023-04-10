
const express = require('express');// import statement 
const app = express();
const port = 5000; // Port decleration 

app.get('/', (req, res) => {
res.send('working perfectly');
});

app.get('/', (req, res)=>{
    res.send('Response from home')
});

app.listen(port,() => {console.log('server started')}
);// to check server started write in terminal (node --watch index)


