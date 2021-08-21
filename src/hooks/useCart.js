import { useContext } from "react";
import { StateContext } from "../context/StateProvider";

export const useCart = () => useContext(StateContext);
