import { Router } from "express";
import * as UserController from '../controllers/UserController.js';

const router = Router();

// @ GET
// http://localhost:5000/api/user/liked/:email

router.get("/liked/:email", UserController.getLikedMovies);


// @ POST
// http://localhost:5000/api/user/add

router.post("/add", UserController.addToLikedMovies);


// @ PUT
// http://localhost:5000/api/user/remove

router.put("/remove", UserController.removeFromLikedMovies);



export default router;
