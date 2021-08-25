import { useEffect, useState } from "react";
import { userIsLogged } from "../utils/auth";

export const useUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    userIsLogged(setUser);
  }, []);
  return { user, setUser };
};
