const store = require('./store')
const {changeDescAction,changeNameAction} = require('./store/actionCreators')

store.subscribe(()=>{
    console.log('CHANGE',store.getState())
})

console.log('INIT:',store.getState())
store.dispatch(changeNameAction('lilei'))
store.dispatch(changeDescAction('通过actionCreators修改的DESC！'))