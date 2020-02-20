const fs = require('fs');
module.exports = function (absolutePath, callback){
    fs.readFile(absolutePath, 'utf-8', (error, data)=>{
        if(error){
            return callback(error)
        }
        callback(null, data)
    })
}

//utf-8 ya te da un objeto-Buffer en strings 
