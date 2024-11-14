import mongoose from 'mongoose';




const Connection=async function(username,password){
    const URL=`mongodb://${username}:${password}@clone-inshorts-shard-00-00.jzadc.mongodb.net:27017,clone-inshorts-shard-00-01.jzadc.mongodb.net:27017,clone-inshorts-shard-00-02.jzadc.mongodb.net:27017/?ssl=true&replicaSet=atlas-3u4bks-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clone-inshorts`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('database connected succcessfully');
    }catch(error){
        console.log('Error while connecting with the database',error);
    }
}
export default Connection;