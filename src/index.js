const arrayReadFile = require('./readfile');
const verifyLinks = require('./verifyLinks');
const getLinks = require('./getLinks');
const runOptions = require('./options');

//const path = require('path')

//console.log(path)

async function mdLinks(){

    const absolutePath = process.argv[2];
    const pathOptions = process.argv;
    const options = runOptions (pathOptions)    
    console.log('Viene de mi modulo', options)
   /*  let option = await runOptions(pathOptions)
    let optionResolv =  */
    let text = await arrayReadFile(absolutePath)
    let links = getLinks(text, absolutePath);
    
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
