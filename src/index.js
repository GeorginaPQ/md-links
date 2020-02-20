const absolutePath = process.argv[2];
const arrayReadFile = require('./redfile');

arrayReadFile(absolutePath,(error, data)=>{
    console.log(data)
})
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
