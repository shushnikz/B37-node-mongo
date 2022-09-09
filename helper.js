import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function getAllMovies(request) {
  return await client.db("b37wd").collection("movies").find(request.query).toArray();
}
export async function getMovieById(id) {
  return await client.db("b37wd").collection("movies").
    findOne({ id: id });
}
export async function deleteMovieById(id) {
  return await client.db("b37wd").collection("movies").deleteOne({ id: id });
}
export async function addMovies(newMovies) {
  return await client.db("b37wd").collection("movies").insertMany(newMovies);
}
export async function updateMovieById(updateMovie,id) {
  return await client.db("b37wd").collection("movies").updateOne({id: id}, { $set: updateMovie })
}

export async function genPassword(password){
  const salt = await bcrypt.genSalt(10);//bcrypt.genSalt(no of rounds)
  console.log(salt)
  const hashPassword = await bcrypt.hash(password,salt)
  return hashPassword
}

export async function createUser(username,hashedpassword){
  return await client.db("b37wd").collection("users")
  .insertOne({username: username, password: hashedpassword});
}

export async function getUserByName(username){
  return await client.db("b37wd").collection("users")
  .findOne({username: username});
}