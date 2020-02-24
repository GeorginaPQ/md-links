const arrayReadFile = require('./readfile');
const absolutePath = process.argv[2];
arrayReadFile(absolutePath,(err, data) => {
    if(err) {
        console.log(err)
    }
    if(!err) {
        console.log (data)
    }
})

//data es links






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
