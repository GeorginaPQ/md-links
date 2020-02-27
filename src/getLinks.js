
function getLinks(text){
    const expression = /(https?:\/\/[^\s\)]+)/g;
                const regex = new RegExp(expression)
                const links = text.match(regex)

    return links;
}

module.exports = getLinks;