const readFile = require('./readfile')
const verifyLinks = require('./verifyLinks')
const getLinks = require('./getLinks')
const runOptions = require('./options')
const getStats = require('./stats')
//const path = require('path')
//console.log(path)

async function mdLinks(){
    

    const absolutePath = process.argv[2];
    const pathOptions = process.argv;
    const options = runOptions (pathOptions)    
    //console.log('Viene de mi modulo', options)
   /*  let option = await runOptions(pathOptions)
    let optionResolv =  */
    
    let text = await readFile(absolutePath)
    let links = getLinks(text, absolutePath)
    let resultLinks = await verifyLinks(links) 
    let statsLinks = getStats(resultLinks)
    //console.log(statsLinks)
    //console.log(resultLinks)
    if(options.validate === false && options.stats === false){
        console.log(links)
    }else if(options.validate === true && options.stats === true){
        console.log(resultLinks), console.log(statsLinks)
    }else if(options.validate === true){
        console.log(resultLinks)
    }else if(options.stats === true){
        console.log(statsLinks)
    }

    /* if(options.validate === true){
        verifyLinks

    }else if(....){

    } */


    
    /*readFile(absolutePath)
    .then((text)=>{
      let links = getLinks(text, absolutePath)
      return links
    })
    .then((links) => {
        if(options.validate === true){

        }else{

        }
    })
    .cash((err)=>{
        console.log(err)
    })*/


    

}

mdLinks()






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
