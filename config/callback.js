import mongoose from "mongoose"

let url="mongodb://localhost:27017/CarolinesDB"

mongoose.connect(url, (err)=>{
    if(err){
        console.log("Conexión Falló:"+err)
    }else{
        console.log("Conexión Exitosa")
    }
    });
