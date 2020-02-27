const fs = require('fs');

module.exports = (absolutePath) => {

    return new Promise((resolve, reject) => {
        fs.readFile(absolutePath, 'utf-8', (err, data)=>{
            if(err) {
                reject(err);
            }
            if(!err){ 
                resolve(data)
            }       
        })
    });
    
}


/**
 * 
                //verifyLinks (links)
 */
//utf-8 ya te da un objeto-Buffer en strings 
