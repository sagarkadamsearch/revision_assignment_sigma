const express = require('express');
const { connection } = require('mongoose');
const { UserRouter } = require('./routes/userPage');
const multer = require('multer');

const cors = require('cors');

const app = express();


app.use(cors());


// Configure Multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/register',upload.single('image'),async(req,res)=>{
  
  try {
      const {avatar} = req.body;

      
  } catch (error) {
      
  }
 

})








app.listen(3000,async()=>{
    try {
        await connection;
        console.log('Database is connected');
        console.log('server is running at port 3000')
    } catch (error) {
        console.log(error);
    }
})