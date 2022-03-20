import express from "express";
import { newPost } from "../Controllers/Post-controller.js";
import {getPosts} from "../Controllers/getPost-controller.js";
import { newReply } from "../Controllers/setReply-controller.js";
import { newSelectedPost } from "../Controllers/Post-controller.js";

const route = express.Router();

route.post('/addPost', newPost);

route.get('/getPostsArray',getPosts);

route.post('/setReply',newReply);

route.post('/getSelectedPost',newSelectedPost);

export default route;