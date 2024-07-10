const { CHANGE_NAME, CHANGE_DESC } = require("./constant");
/** actionCreators: 用来创建action */
function changeNameAction(name){
    return {
        type: CHANGE_NAME,
        payload: name,
    }
}

function changeDescAction(desc){
    return {
        type: CHANGE_DESC,
        payload: desc,
    }
}

module.exports = {
    changeDescAction,
    changeNameAction
}