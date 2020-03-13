 const runOptions = (pathOptions) => {
     //console.log(pathOptions)
    const options = {
        validate: false,
        stats: false
    }
    if(pathOptions.indexOf('--validate') > -1) {
        options.validate = true;
        console.log ('Existe el validate')
    }
    if(pathOptions.indexOf('--stats') > -1) {
        options.stats = true;
        console.log ('Existe el stats')
    }
 return options
}
 
module.exports = runOptions;