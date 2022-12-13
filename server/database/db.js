import mongoose from "mongoose";

export const Connection = async (username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-qk0pvta-shard-00-00.aqosnxu.mongodb.net:27017,ac-qk0pvta-shard-00-01.aqosnxu.mongodb.net:27017,ac-qk0pvta-shard-00-02.aqosnxu.mongodb.net:27017/?ssl=true&replicaSet=atlas-lzgijr-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {useNewUrlParser : true })
     console.log('Database Successfully Connected')
  }catch(error){
    console.log('Error while in database connected ', error)
  }
}