const express = require('express');
const { connection } = require('./db.js');
const { UserRouter } = require('./routes/userPage');
const multer = require('multer');
const bcrypt = require('bcrypt');

const cors = require('cors');
const { UserModel } = require('./models/userModel');

const app = express();


app.use(cors());


// Configure Multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/register',upload.single('image'),async(req,res)=>{
  const {password} = req.body;
  try {
     bcrypt.hash(password,5,async (err,hashed)=>{
        if(hashed){
            try{
            
               const imageBuffer = req.file.buffer;
               const imageUrl = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
               const user = {
                 ...req.body,
                 password:hashed,
                 avatar:imageUrl,
                 created_at:Date(),
                 updated_at:Date() 
               }
               const newUser = new UserModel(user);
          
               await newUser.save();
               res.status(200).json({"Msg":"User account created successfully"})

            }catch(err){
               res.status(400).send({"Error":err});
            }
        }
        else{
            res.status(400).json({"error":err});
        }
     })
    
  } catch (error) {
    res.status(400).json({"error":error});
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