const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://remora_aman_dev:6BlLedI30vXQduy6@cluster0.oxaojci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(()=>{
            console.log("Db Connection established")
        })
        .catch((err)=>{
            console.log("Error on db connection", err)
        })
        
    } catch (error) {
        console.log("error while connection to db", error)
    }
    
}

module.exports = connectToDb;