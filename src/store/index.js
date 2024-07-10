import { createStore, applyMiddleware} from "redux";
import { reducer as counterReducer } from "./counter/reducer";
import { reducer as bannerReducer } from "../pages/Banner/store";
import { thunk } from "redux-thunk";

function combineReducers(reducers){
  return (state={},action) =>{
    return Object.keys(reducers).reduce((prev,reducersKey)=>{
      return {
        ...prev,
        [reducersKey]: reducers[reducersKey](state[reducersKey],action)
      }
    },{})
  }
}

export default createStore(
  combineReducers({
    counter: counterReducer,
    banner: bannerReducer,
  }),
  applyMiddleware(thunk)
);
