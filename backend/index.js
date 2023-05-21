
const express = require('express');// import statement 
const app = express();
const port = 5000; // Port decleration /

const userRouter = require('./routers/userRouter');
const contentRouter = require('./routers/contentRouter');

const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json());

app.use('/user', userRouter);
app.use('/content', contentRouter);


// routes
app.get('/', (req, res) => {
    res.send('Working Perfectly');
});

app.get('/home', (req, res) => {
    res.send('Response from Home');
});

app.get('/add', (req, res) => {
    res.send('Response from Add');
})

app.listen( port, () => { console.log('server started') } );

// app.use(express.json());

// app.use('/user', userRouter);

// // routes 
// app.get('/', (req, res) => {
// res.send('working perfectly');
// });

// app.get('/home', (req, res)=>{
//     res.send('Response from home')
// });
// app.get('/add', (req, res)=>{
//     res.send('Response from add')
// });


// app.listen(port,() => {console.log('server started')}
// );// to check server started write in terminal (node --watch index)


// // app.get('/', (req, res) => {
// // res.send('working perfectly');
// // });

// // app.get('/', (req, res)=>{
// //     res.send('Response from home')
// // });

// // app.listen(port,() => {console.log('server started')}
// // );// to check server started write in terminal (node --watch index)


