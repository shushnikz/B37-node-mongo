import express from "express";
import { getAllMovies, addMovies, getMovieById, deleteMovieById, updateMovieById } from "../helper.js";
const router=express.Router();

router.get("/",async(request,response)=>{
    // const { language,rating } = request.query;
    // console.log(request.query,language);
    // let filteredMovies=movies;

    // if(language){
    //   filteredMovies=filteredMovies.filter((mv)=>mv.language===language)
    // }
    // if(rating){
    //   filteredMovies=filteredMovies.filter((mv)=>mv.rating===+rating)
    // }

    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }
    console.log(request.query)
    const movie=await getAllMovies(request);
    response.send(movie);
})


// inbuild middleware - say data is in JSON


// post method - to insert data to db
router.post("/",express.json(),async(request,response)=>{
  const newMovies=request.body;
  console.log(newMovies);
  // db.movies.insertMany(movies)
  const result=await addMovies(newMovies);
  response.send(result)
})

// get id - /movies/id - /movies/100

// Tak - to send only movies with the matched id
router.get("/:id",async(request,response)=>{
    const {id}=request.params;
    console.log(id);
    // const movie=movies.find((mv)=>mv.id==id);=>node
    // to connect with mongodb
    const movie= await getMovieById(id)

    console.log("movie")
    movie?
    response.send(movie): response.status(404).send({message: "No movie found"});
})


// delete a movie with movie id
router.delete("/:id",async(request,response)=>{
  const {id}=request.params;
  console.log(id);
  // const movie=movies.find((mv)=>mv.id==id);=>node
  // to connect with mongodb
  const movie= await deleteMovieById(id)
  response.send(movie)
})

// update a movie id
router.put("/:id",async(request,response)=>{
    const {id}=request.params;
    const updateMovieById=request.body;
    console.log(id);
    // const movie=movies.find((mv)=>mv.id==id);=>node
    // to connect with mongodb
    // db.movies.updateOne({id: "102"},{$set: updateMovie})
    const result= await updateMovieById(updateMovie,id)
    response.send(result)
  })

export const moviesRouter=router