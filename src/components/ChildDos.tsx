import { useMemo } from "react";
import Posts from "./Posts";
import { useAppContext, useUserContext } from "../hooks";

const ChildDos = () => {
  const { state: appState } = useAppContext()
  const { state: userState } = useUserContext()

  const memoizedPosts = useMemo(() => appState.posts.slice(0, 2), [appState.posts])

  return (
    <div>
      <h2>ChildDos</h2>

      <p>count: { appState.count } </p>
      <p>theme: { appState.theme } </p>

      <p>username: { userState.username } </p>
      <p>email: { userState.email } </p>
      <p>address.street: { userState.address.street } </p>
      <p>address.city: { userState.address.city } </p>

      <Posts {...{ data: memoizedPosts }} />
    </div>
  );
}

export default ChildDos;
