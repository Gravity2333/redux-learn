const store = require('./store')

/** 初始值 */
console.log(store.getState())

const action = {
    type: 'CHANGE_DESC',
    payload: ' 这是更新之后的描述信息 !'
}

store.dispatch(action)

/** 修改之后值 */
console.log(store.getState())