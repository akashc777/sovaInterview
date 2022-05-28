
   
const queData = require('../../models/res.json');
const qaDict = {}; 
async function postRouter(req, res) {

    // get list of Que and time if we dont have it 
    if(Object.keys(obj).qaDict === 0){
        preProcessQList();
    }

    ans = checkQuestion(req.body);

    return res.status(200).json(ans);
}



function preProcessQList(){
    queData.QuePages.forEach((value, index, array)=>{
        for (const q in value.listofQue) {
            qaDict[q]= q;
        }
    });
}

function checkQuestion(reqQNAList){

    for(const qreq in reqQNAList){
        if(qaDict[qreq] != undefined && checkFunctionWithType[qaDict[qreq].type](reqQNAList[qre],qaDict[qre]) == false) return false;

        
    }
    return true;
}


const checkFunctionWithType = {
    "scale": checkScale,
    "Dropdown": checkDropdown,
    "Number": checkNumber,
    "Multi-select": checkMultiOption
}


function checkNumber(reqVal, resTempObj){
    if(reqVal > resTempObj.range[1] || reqVal < resTempObj.range[0]) return false;
    return true;
}

function checkDropdown(reqVal, resTempObj){
    return resTempObj.Options.includes(reqVal);
}

function checkMultiOption(reqVal, resTempObj){

    return reqVal.every((currVal) => {
        resTempObj.MultiSelectOptions.filter(function (o) {
        return o.Option === currVal;
    }).length > 0;

    });
}

function checkScale(reqVal, resTempObj){
    if(reqVal < resTempObj.min.value || reqVal > resTempObj.max.value) return false;

    return true;
}

module.exports = {
    postRouter,
}