import type { Dispatch } from "react";
import type { IUser, UserAction } from "../state/reducers/userReducer";

const User = ({ userState, userDispatch }: { userState: IUser; userDispatch: Dispatch<UserAction> }) => {
  return (
    <div>
      <div>
        <label htmlFor="inp_username">Username: </label>
        <input type="text"
          id="inp_username"
          name="username"
          placeholder="Enter Username"
          value={userState.username}
          onChange={(e) => userDispatch({ type: 'UPDATE_USER', payload: { username: e.target.value } })}
          autoFocus />
        <p>{userState.username}</p>
      </div>

      <div>
        <label htmlFor="inp_email">Email: </label>
        <input
          type="text"
          id="inp_email"
          name="email"
          placeholder="Enter Email"
          value={userState.email}
          onChange={(e) => userDispatch({ type: 'UPDATE_USER', payload: { email: e.target.value } })} />
        <p>{userState.email}</p>
      </div>

      <div>
        <label htmlFor="inp_street">Street: </label>
        <input
          type="text"
          id="inp_street"
          name="street"
          placeholder="Enter Street"
          value={userState.address?.street}
          onChange={(e) => userDispatch({ type: 'UPDATE_ADDRESS', payload: { street: e.target.value } })} />
        <p>{userState.address?.street}</p>
      </div>

      <div>
        <label htmlFor="inp_city">City: </label>
        <input
          type="text"
          id="inp_city"
          name="city"
          placeholder="Enter City"
          value={userState.address?.city}
          onChange={(e) => userDispatch({ type: 'UPDATE_ADDRESS', payload: { city: e.target.value } })} />
        <p>{userState.address?.city}</p>
      </div>
    </div>
  );
}

export default User;