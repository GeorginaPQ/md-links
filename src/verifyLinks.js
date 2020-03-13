const fetch = require('node-fetch')


function verifyLinks(links){
    return Promise.all (links.map( async url =>{
        try{
            const statusUrl = await fetch(url.href)
            url['status'] = statusUrl.status
            return url
        }
        catch(err){
            url['stats'] = err.code
            return url
        }
    }))
}

module.exports = verifyLinks;