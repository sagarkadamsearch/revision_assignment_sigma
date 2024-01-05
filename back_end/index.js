const express = require('express');
const { connection } = require('mongoose');
const { UserRouter } = require('./routes/userPage');
const cors = require('cors');

const app = express();


app.use(cors());
app.use('/users',UserRouter);








app.listen(3000,async()=>{
    try {
        await connection;
        console.log('Database is connected');
        console.log('server is running at port 3000')
    } catch (error) {
        console.log(error);
    }
})