const fs = require('fs');

module.exports = (absolutePath, callback) => {
    fs.readFile(absolutePath, 'utf-8', (err, data)=>{
        if(err) {
            return callback(err)
        }
        const expression = 'https://'
        const regex = new RegExp(expression)
        const arraylineas = data.toString().split('\n')
        const arrayLinks = arraylineas.filter((item) => {
            return item.match(regex)
        })        
        return callback(null, arrayLinks)
    })
}

//utf-8 ya te da un objeto-Buffer en strings 
