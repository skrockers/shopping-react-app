const express = require('express');
const router = express.Router();
const userModel = require('../database/models');
const {appLogger} = require('../middleware/appLogger');




router.get('/', (req, res, next)=> {
    res.send("ACCOUNT");
    next();
 })


 router.route('/login')
.get(async(req, res, next)=> {
   const userEmail = 'ss@ggmail.com';
   const findUser = await userModel.findOne({email:userEmail})
   res.send(findUser);
   next();
})
.post(async(req, res, next) => {
   const userEmail = req.body.email;
   const userPassword = req.body.password;
   
   // Check the login credentials
   const findUser = await userModel.findOne({email:userEmail},{password:userPassword});
   console.log(findUser);
   if(findUser){
      res.status(200).json({
         isOk: true,
         message: "Login success",
         isLogged: true,
         error:false
      });
   }
   else{
      appLogger('errorLogs.txt', `Error: User not Found`)
      res.json({
         message:"User not found",
         error: true
      });
   }
});

router.route('/signup')
.post(async(req, res, next) => {
   try {
      const {name, email, password, confirmPassword, contactNo} = req.body;
      // Check if already the user exists in database
      const userExists = await userModel.find({email:email, contactNo: contactNo});
      if(userExists && userExists.length > 0){
         console.log('User exists')
         appLogger('errorLogs.txt', `User already exists`);
         res.json({
            message:'User already exists',
            error: true
         })
      } else {
         console.log('Not User exists')
         console.log('onBoarding')
         //onBoard the new user
         const onBoardUser = await userModel.create({
            name:name,
            email:email,
            password: password,
            confirmPassword: confirmPassword,
            contactNo: contactNo
         })
        
         if(onBoardUser){
            console.log(onBoardUser);
            res.status(200).json({
               message: 'User created successfully',
               isOk: true,
               error: false
            })
         } else {
            res.status(500).json({
               message: 'Unable to create the account at this moment',
               error:true
            })
         }
      }

   }
   catch(err){
      appLogger('errorLogs.txt', `${err.name}: ${err.message}`);
      res.status(500).json({error: err})
   }
 
   next();
})





module.exports = router;