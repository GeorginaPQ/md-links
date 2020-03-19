const fetch = require('node-fetch')


function verifyLinks(links){
    let verifyPromises = links.map( async url =>{
        const data = {
            ...url
        }
        try{
            const result = await fetch(url.href)
            data.status = result.status
            
        }
        catch(err){
            data.status = err.code
        }
        return data 
    })
    return Promise.all(verifyPromises)
}

module.exports = verifyLinks;