import Head from "next/head";
import Main from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("ここにテキスト");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>(["初期値"]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleIsShow = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* 初期<h1>{isShow ? count : ""}</h1> */}
      {/* 論理値{isShow && <h1>{count}</h1>} */}
      {/* ボタン位置固定化 */}
      <h1 style={{ visibility: isShow ? "visible" : "hidden" }}>{count}</h1>

      <button onClick={handleIsShow}>{isShow ? "非表示" : "表示"}</button>
      <button onClick={handleClick}>カウントアップ</button>
      <input
        type="text"
        placeholder="入力してください"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h2>{text}</h2>
      <button onClick={handleAdd}>リストを追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main title="index" />
    </>
  );
}
