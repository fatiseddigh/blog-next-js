import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";
const AuthContext = createContext();
const AuthContextDispatcher = createContext();
const initialState = {
  user: null,
  loading: true,
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return {
        user: null,
        error: null,
        loading: true,
      };
    case "SIGNIN_SUCCESS":
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case "SIGNIN_REJECT":
      return {
        user: null,
        error: action.error,
        loading: false,
      };
    default:
      return { ...state };
  }
};
const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success("welcome to the app");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },
  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signup", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success("login successfully");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },
  LOAD_USER:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .get("http://localhost:5000/api/user/load", {
          withCredentials: true,
        })
        .then(({ data }) => {
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
        });
    },

  SIGNOUT: {},
};
const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
