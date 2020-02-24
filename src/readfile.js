const fs = require('fs');

module.exports = (absolutePath, callback) => {
    fs.readFile(absolutePath, 'utf-8', (err, data)=>{
        if(err) {
            return callback(err)
        }
        if(!err){ 
            const expression = /(https?:\/\/[^\s\)]+)/g;
            const regex = new RegExp(expression)
            const links = data.match(regex)
            return callback (null, links)             
        }       
    })
}

//utf-8 ya te da un objeto-Buffer en strings 
