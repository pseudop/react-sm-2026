import { useEffect } from "react";
import { useQueryLite, useUserContext, useAppContext } from "../hooks";
import { getPosts } from "../api";
import User from "./User";
import Posts from "./Posts";

const ChildUno = () => {
  // hooks
  const { state: appState, dispatch: appDispatch } = useAppContext()
  const { state: userState, dispatch: userDispatch } = useUserContext()
  const getPostsReturn = useQueryLite({ queryFn: (signal) => getPosts(signal) });

  useEffect(() => {
    if (getPostsReturn.data) appDispatch({ type: "UPDATE_POSTS", payload: getPostsReturn.data });
  }, [getPostsReturn.data, appDispatch]);

  return (
    <>
      <div>
        <h2>Child Uno</h2>

        <div>
          <span>counter: </span>
          <button onClick={() => appDispatch({ type: 'DECREMENT', payload: "" })}>-</button>
          <span style={{ margin: '0 10px' }}>{appState.count}</span>
          <button onClick={() => appDispatch({ type: 'INCREMENT', payload: "" })}>+</button>
        </div>

        <div>
          <span>theme: </span>
          <button onClick={() => appDispatch({ type: 'TOGGLE_THEME', payload: "" })}>
            {appState.theme}
          </button>
        </div>

        <User {...{ userState, userDispatch }} />
        <Posts {...getPostsReturn} />
      </div>
    </>
  );
}

export default ChildUno;
