

/*module.exports = (absolutePath, extension, callback)=> {
    fs.readfile(absolutePath, (err, data) => {
        if (err) {
            return callback(err);
        }
        const filteredList = data.filter((item)=>{
            return `.${extension}` === pathExtension.extname(item);
        })
        return callback(null,filteredList);
    })
}