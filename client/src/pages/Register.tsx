import axios from "axios";
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { FormRow } from "../components/FormRow";
import { Logo } from "../components/wrappers/Logo";
import { RegisterPage } from "../components/wrappers/RegisterPage";
import { Action } from "../context/actions";
import { useAppContext } from "../context/appContext";
import { useDispatch } from "../context/dispatchContext";
import { addUserToLocalStorage } from "../utils/localStorageUtils";

const initialState = {
  name: "",
  email: "admin@gmail.com",
  password: "secret",
  isMember: true,
};

export const Register: FunctionComponent = () => {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, token } = useAppContext();
  const { authenticateUser, clearAlert, displayAlert } = useSetupUserLogic();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (showAlert) {
      clearAlert();
    }

    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
    }
    const currentUser = { name, email, password };

    if (isMember) {
      authenticateUser({
        currentUser,
        endpoint: "login",
        alertText: "Logging Successful! Redirecting...",
      });
      return;
    }

    authenticateUser({
      currentUser,
      endpoint: "register",
      alertText: "User Created! Redirecting...",
    });
  };

  return (
    <RegisterPage className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        <Alert show={showAlert} />
        {!values.isMember && (
          <FormRow
            name="name"
            handleChange={handleChange}
            type="text"
            value={values.name}
          />
        )}
        <FormRow
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
        />
        <FormRow
          name="password"
          handleChange={handleChange}
          type="password"
          value={values.password}
        />
        <button type={"submit"} className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type={"button"} className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </RegisterPage>
  );
};

const useSetupUserLogic = () => {
  const dispatch = useDispatch();

  const displayAlert = () => {
    dispatch({ type: Action.DISPLAY_ALERT });
  };

  const clearAlert = () => {
    dispatch({ type: Action.CLEAR_ALERT });
  };

  const authenticateUser = async ({
    alertText,
    currentUser,
    endpoint,
  }: {
    currentUser: any;
    endpoint: string;
    alertText: string;
  }) => {
    dispatch({ type: Action.AUTHENTICATE_USER_BEGIN });

    try {
      const response = await axios.post<{
        token: string;
        user: {
          name: string;
          email: string;
          lastName: string;
          location: string;
        };
      }>(`http://localhost:5000/api/v1/auth/${endpoint}`, currentUser);
      const { token, user } = response.data;

      dispatch({
        type: Action.AUTHENTICATE_USER_SUCCESS,
        payload: { user, token, alertText },
      });

      addUserToLocalStorage({ user, token });
    } catch (error: any) {
      dispatch({
        type: Action.AUTHENTICATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  return { displayAlert, clearAlert, authenticateUser };
};
