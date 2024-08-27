import { useCallback, useState } from "react";

export const useAddArray = () => {
  const [text, setText] = useState("ここにテキスト");
  const [array, setArray] = useState<string[]>(["初期値"]);
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);
  return { text, array, handleAdd, setText };
};
