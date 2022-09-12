import express from "express";
import { genPassword, createUser, getUserByName } from "../helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router=express.Router();



// post method - to insert data to db
router.post("/signup",async(request,response)=>{
    const { username, password }=request.body;
    console.log(username, password);
    // db.movies.insertMany(movies)
    const isUserExist=await getUserByName(username)
    // if username is already exist
    if(isUserExist){
        response.status(400).send({message: "username already taken"});
        return;
    }
    if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%$]).{8,}$/g.test(password)){
        response.status(400).send({message: "Password pattern doesnot match"})
        return;
    }
    const hashedpassword = await genPassword(password)
    const result = await createUser(username,hashedpassword);
    response.send(result)
  })


  //login
  router.post("/login",async(request,response)=>{
    const { username, password }=request.body;
    console.log(username, password);
    // db.movies.insertMany(movies)
    const userFromDB=await getUserByName(username)
    console.log(userFromDB);
    // if username is already exist
    if(!userFromDB){
        response.status(400).send({message: "Invalid credentials"});
        return;
    }
    const storedPassword = userFromDB.password;
    const isPasswordMatch = await bcrypt.compare(password,storedPassword)
    if(!isPasswordMatch){
        response.status(400).send({message: "Invalid credentials"});
        return;
    }

    // issue token
    const token = jwt.sign({ id: userFromDB._id},process.env.SECRET_KEY);
    response.send({ message: "successful login", token:token});
  })

  export const userRouter=router;
  