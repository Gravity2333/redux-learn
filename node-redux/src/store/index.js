/** 获取createStore方法 用来创建一个store */
const { createStore } = require("redux");
const reducer = require('./reducer')
const store = createStore(reducer);
module.exports = store;
