import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { Alert } from "../components/Alert";
import { FormRow } from "../components/FormRow";
import { Logo } from "../components/wrappers/Logo";
import { RegisterPage } from "../components/wrappers/RegisterPage";
import { Action } from "../context/actions";
import { useAppContext } from "../context/appContext";
import { useDispatch } from "../context/dispatchContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export const Register: FunctionComponent = () => {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert } = useAppContext();
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (showAlert) {
      clearAlert();
    }

    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const displayAlert = () => {
    dispatch({ type: Action.DISPLAY_ALERT });
  };

  const clearAlert = () => {
    dispatch({ type: Action.CLEAR_ALERT });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
    }
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
        <button type={"submit"} className="btn btn-block">
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
