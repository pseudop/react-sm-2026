import { useEffect } from "react";
import { useAppDispatch, useAppSelector, useQueryLite } from "../hooks";
import { DECREMENT, INCREMENT, TOGGLE_THEME, UPDATE_POSTS } from "../state/reducers/appSlice";
import { getPosts } from "../api";
// import { initialUserState, userReducer } from "../state/reducers/userReducer";
import Posts from "./Posts";
import User from "./User";

const ChildUno = () => {
  // states 
  // const [count, setCount] = useState<number>(0);
  // const { value: isDark, toggle } = useToggle();
  // const [userState, useDispatch] = useReducer(userReducer, initialUserState);
  const { app: appState, user: userState } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const getPostsReturn = useQueryLite({ queryFn: (signal) => getPosts(signal) });
  useEffect(() => {
    if (getPostsReturn.data)
      dispatch(UPDATE_POSTS(getPostsReturn.data))
  }, [getPostsReturn.data]);

  return (
    <>
      <div>
        <h2>Child Uno</h2>

        <div>
          <span>counter: O </span>
          <button onClick={() => dispatch(DECREMENT())} autoFocus>-</button>
          <span style={{ margin: '0 10px' }}>{appState.count}</span>
          <button onClick={() => dispatch(INCREMENT())}>+</button>
        </div>

        <div>
          <span>theme: O </span>
          <button onClick={() => dispatch(TOGGLE_THEME())}>
            {appState.theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>

        <User {...{ userState, dispatch }} />
        <Posts {...{ data: appState.posts }} />
      </div>
    </>
  );
}

export default ChildUno;
