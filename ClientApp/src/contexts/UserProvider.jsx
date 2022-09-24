import React from "react";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

const cookies = new Cookies();

let token = cookies.get("jwt");

const staticStateAdditions = (obj) => {
  if (!obj || Object.keys(obj).length < 1) return obj;
  return { ...obj, header: `Bearer ${token}`, jwt: token };
};

const initialState = staticStateAdditions(token ? jwt_decode(token) : {});

export const UpdateJwtToken = (jwt, _setUser) => {
  token = jwt;
  const decoded = jwt_decode(jwt);
  cookies.set("jwt", jwt, { path: "/", expires: new Date(decoded.exp * 1000) });
  _setUser(decoded);
};

export const RemoveJwtToken = (_setUser) => {
  cookies.remove("jwt");
  token = undefined;
  _setUser({});
};

export const UserContext = React.createContext({
  state: initialState,
  dispath: () => null,
});

export const UserProvider = ({ children }) => {
  const [state, dispath] = React.useReducer(
    (state, action) => staticStateAdditions(action),
    initialState
  );
  return (
    <UserContext.Provider value={[state, dispath]}>
      {children}
    </UserContext.Provider>
  );
};
