import { useMemo } from "react";
import { useAppSelector } from "../hooks";
import Posts from "./Posts";

const ChildDos = () => {
  const { app: appState, user: userState } = useAppSelector((state) => state);
  const slicedPosts = useMemo(() => appState.posts.slice(0,2), [appState.posts]) 

  return (
    <div>
      <h2>ChildDos</h2>
      <p>count: { appState.count } </p>
      <p>theme: { appState.theme } </p>

      <p>userame: {userState.username}</p>
      <p>email: {userState.email}</p>
      <p>{userState.address.street}, {userState.address.city}</p>

      <Posts { ...{data: slicedPosts} } />
    </div>
  );
}

export default ChildDos;
