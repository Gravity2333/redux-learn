import { useEffect, useState } from "react";
import store from "../../store";
import { addNumAction, subNumAction } from "../../store/actionCreators";

export default function Profile() {
  const [counter, setCounter] = useState(store.getState()?.num);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCounter(store.getState()?.num);
    });

    return ()=>unsubscribe()
  }, []);

  return (
    <>
      <h2>profile</h2>
      COUNTER: {counter}
      <button onClick={()=>{
        store.dispatch(addNumAction(1))
      }}>+</button>
      <button onClick={()=>{
        store.dispatch(subNumAction(1))
      }}>-</button>
    </>
  );
}
