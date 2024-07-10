const store = require("./store");

const unsubscribe = store.subscribe(() => {
  console.log("redux数据变动，最新数据为:",store.getState());
});

const nameAction = {
  type: "CHANGE_NAME",
  payload: "新名称",
};

store.dispatch(nameAction);
