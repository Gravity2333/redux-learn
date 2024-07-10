const { CHANGE_NAME, CHANGE_DESC } = require("./constant");
/**
 * createStore(reducer)
 * reducer是一个纯函数,createStore会在创建store的过程中，调用一次reduer来获取initialState初始值
 */

/** 设置一个初始化的state */
const initialState = {
  name: "redux",
  desc: "这是一个初始化描述!",
};

function reducer(state = initialState, action) {
  /** reducer接受state和action
   * 初始化时，state为undefined，action的type为@@INIT
   * 每次store.dispatch(action) 时，state为当前state，action为传入的action
   */
  switch (action.type) {
    case CHANGE_DESC:
      return {
        ...state,
        desc: action.payload,
      };
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
}

module.exports = reducer
