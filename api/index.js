const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config();
const app = express();
const Clothing = require('./models/Clothing.js')

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

const encrypt = bcrypt.genSaltSync(5);
const cookieEncrypt = "ndaksd90312m0f01fnm01"

mongoose.connect('mongodb+srv://admin:U2SEf4O5YbiihKmV@clueless.h0fa7iz.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req,res) => {
    const {name,email,password} = req.body;
    const existingUser = await User.findOne({email})
    try{
        
        if (existingUser){
            return res.status(422).json({error:"Email already exists"});
        }
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, encrypt),
        });
        res.json(userDoc);
    } catch(e) {
        res.status(422).json(e);
    }
});
app.post('/wardrobe', async (req,res) => {
    const {token} = req.cookies;
    const {name,color,size, photo, description} = req.body;
    jwt.verify(token,cookieEncrypt, {}, async(err,userData) =>{
        if(err) throw err;
        const clothingDoc = await Clothing.create({
            owner:userData.id,
            name,
            color,
            size,
            photo,
            description,
    })
    res.json(clothingDoc);
});
app.get('/wardrobe', async (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, cookieEncrypt, {}, async (err, userData) => {
        if(err) throw err;
        const { id } = userData;
        res.json(await Clothing.find({ owner: id }));
    });
});
});
app.post('/login', async (req,res) => {
    const {email,password} = req.body;  
    const userDoc = await User.findOne({email})
    if (userDoc){
        const passAuthentication = bcrypt.compareSync(password, userDoc.password)
        if (passAuthentication) {
            jwt.sign({email:userDoc.email,id:userDoc._id}, cookieEncrypt, {}, (err, token) =>{
                res.cookie('token',token).json(userDoc);
            });
        } else {
            res.status(401).json({ error: 'Password Incorrect' });
        }
    } else{
        res.status(401).json({ error: 'Account information incorrect' });
    }
});
app.delete('/wardrobe/:id', async (req, res) => {
    const { token } = req.cookies;
    const { id } = req.params;
  
    jwt.verify(token, cookieEncrypt, {}, async (err, userData) => {
      if (err) throw err;
  
      try {
        console.log('Deleting item with ID:', id);
  
        // Verify ownership and delete the item
        const deletedItem = await Clothing.findOneAndDelete({ _id: id, owner: userData.id });
  
        console.log('Deleted item:', deletedItem);
  
        if (!deletedItem) {
          // Change the status to 200 and send a success message
          return res.status(200).json({ message: 'Item not found or not owned by user' });
        }
  
        // Send a success message with a 200 status
        res.status(200).json({ message: 'Item deleted successfully', deletedItem });
      } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  });
  
app.get('/wardrobe/:id', async (req, res) => {
    const { token } = req.cookies;
    const { id } = req.params;
  
    jwt.verify(token, cookieEncrypt, {}, async (err, userData) => {
      if (err) throw err;
  
      try {
        const clothingItem = await Clothing.findOne({ _id: id, owner: userData.id });
  
        if (!clothingItem) {
          return res.status(404).json({ error: 'Clothing item not found' });
        }
  
        res.json(clothingItem);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  });
  
app.get('/account', (req,res) =>{
    const {token} = req.cookies;
    if (token){
        jwt.verify(token, cookieEncrypt, {}, async (err,user) =>{
            if(err) throw err;
            const {name,email,_id} = await User.findById(user.id)
            res.json({name,email,_id});
        });
    } else{
        res.json(null);
    }
})
app.post('/logout', (req,res) =>{
    res.cookie('token', '').json(true);
})
app.listen(4000);