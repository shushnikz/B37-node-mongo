import express from "express";
import { genPassword, createUser, getUserByName } from "../helper.js";
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
    const hashedpassword = await genPassword(password)
    const result = await createUser(username,hashedpassword);
    response.send(isUserExist)
  })

  export const userRouter=router;
  