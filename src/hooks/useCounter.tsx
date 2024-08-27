import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleIsShow = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return { count, isShow, handleClick, handleIsShow };
};
