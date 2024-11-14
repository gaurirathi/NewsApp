import { data } from "./constants/data.js";
import news from "./model/news-schema.js";
const DefaultData=async function(){
    try{
        await news.deleteMany({});
       await news.insertMany(data);
       console.log('data imported succesfully');
    }catch(error){
        console.log('Error',error.message);
    }
}
export default DefaultData;