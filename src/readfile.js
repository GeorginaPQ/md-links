const fs = require('fs');

module.exports = (absolutePath, callback) => {
    fs.readFile(absolutePath, 'utf-8', (err, data)=>{
        if(err) {
            return callback(err)
        }
        callback(null, data)
    })
}

//utf-8 ya te da un objeto-Buffer en strings 
