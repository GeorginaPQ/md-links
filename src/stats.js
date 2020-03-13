

function getStats(resultLinks){
   
    let object = {
        unique: 0,
        broken: 0,
        total: resultLinks.length
    }
    for(let i=0; i<resultLinks.length;i++){
        if(resultLinks[i].status <=400){
            object.unique++            
        }else{
            object.broken++
        }
    } return object 
}
module.exports = getStats;