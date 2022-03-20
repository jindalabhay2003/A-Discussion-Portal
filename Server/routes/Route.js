import express from "express";
import { newPost } from "../Controllers/Post-controller.js";
import {getPosts,getBlockedUsers} from "../Controllers/getPost-controller.js";
import { newReply } from "../Controllers/setReply-controller.js";
import { newSelectedPost } from "../Controllers/Post-controller.js";
import {createBlacklist, createBlocklist} from "../Controllers/Post-controller.js";

const route = express.Router();

route.post('/addPost', newPost);

route.get('/getPostsArray',getPosts);

route.post('/setReply',newReply);

route.post('/getSelectedPost',newSelectedPost);

route.post('/addBlacklist',createBlacklist);

route.post('/addBlocklist',createBlocklist);

route.get('/GetBlocked',getBlockedUsers);

export default route;