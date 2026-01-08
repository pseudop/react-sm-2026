import { useReducer, useState } from "react";
import { useQueryLite, useToggle } from "../hooks";
import { getPosts } from "../api";
import { initialUserState, userReducer } from "../state/reducers/userReducer";
import Posts from "./Posts";
import User from "./User";

const ChildUno = () => {
  // states 
  const [count, setCount] = useState<number>(0);
  const { value: isDark, toggle } = useToggle();
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const getPostsReturn = useQueryLite({ queryFn: (signal) => getPosts(signal) });

  return (
    <>
      <div>
        <h2>Child Uno</h2>

        <div>
          <span>counter: </span>
          <button onClick={() => setCount(count - 1)}>-</button>
          <span style={{ margin: '0 10px' }}>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <div>
          <span>theme: </span>
          <button onClick={toggle}>
            {isDark ? 'Dark' : 'Light'}
          </button>
        </div>

        <User {...{ userState, userDispatch }} />
        <Posts {...getPostsReturn} />
      </div>
    </>
  );
}

export default ChildUno;
