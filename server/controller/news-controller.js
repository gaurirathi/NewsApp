import { response } from "express";
import news from "../model/news-schema.js"
import { data } from "../constants/data.js";


export const getnews=async function(req,res){
    try{
        let data= await news.find({});
        res.status(200).json(data);
    }catch(eroor){
        res.status(500).json({message:data.message});
    }

}