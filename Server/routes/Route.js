import express from "express";
import { newPost } from "../Controllers/Post-controller.js";

const route = express.Router();

route.post('/addPost', newPost);

export default route;