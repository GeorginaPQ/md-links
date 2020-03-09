
function getLinks(text, absolutePath){
    const expression = /\[((.*))\]\(((http|https|ftp|ftps).+?)\)/g
    const textExpression = /\[(.*)\]\((.*)\)/
    const links = text.match(expression)
    let arrayLinks = []
    
    for(let i = 0; i < links.length; i++) {
        const textExec = textExpression.exec(links[i])
        let object = {
            text : textExec[1],
            href : textExec[2],
            file : absolutePath
        }
        arrayLinks.push(object)
    }


    return arrayLinks;
}

module.exports = getLinks;