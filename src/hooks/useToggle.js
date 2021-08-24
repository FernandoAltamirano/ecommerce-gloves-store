import { useState } from "react";

export const useToggle = () => {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  return [value, toggle];
};
