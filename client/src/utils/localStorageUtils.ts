import { User } from "../models/User";

export const addUserToLocalStorage = ({
  user,
  token,
}: {
  user: User;
  token: string;
}) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const removeUserToLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
