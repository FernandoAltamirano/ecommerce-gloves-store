import { useContext } from "react";
import { StateContext } from "../context/SellContext/StateProvider";

export const useCart = () => useContext(StateContext);
