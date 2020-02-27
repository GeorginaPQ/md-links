const arrayReadFile = require('./readfile');
const verifyLinks = require('./verifyLinks');
const getLinks = require('./getLinks')




async function mdLinks(){

    const absolutePath = process.argv[2];
    
     let text = await arrayReadFile(absolutePath)
     let links = getLinks(text);
    
     console.log(links);
    //data es links
    

}

mdLinks();







/*const absolutPath = process.argv[2];
const extension = process.argv[3];
const listFiltered = require('./reddir.js');

listFiltered(absolutPath, extension, (err,data) => {
    if(err) {
        console.log(err);
    }
    data.foreach((item, i) => {
        console.log(item);
    });




})*/
