import express from "express";
import { newPost } from "../Controllers/Post-controller.js";
import {getPosts} from "../Controllers/getPost-controller.js";

const route = express.Router();

route.post('/addPost', newPost);

route.get('/getPostsArray',getPosts);

export default route;