import express from "express";
import { getnews } from "../controller/news-controller.js";
const route=express.Router();
route.get('/news',getnews);
export default route;