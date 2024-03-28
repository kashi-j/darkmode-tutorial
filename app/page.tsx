"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);
  const handleToggle = (e: any) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    setDarkTheme(() => window.localStorage.getItem("theme") === "dark");
  },[])

  return (
    <>
      <div className="container">
        <nav>
          <div className="title">サイトタイトル</div>
          <div>
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={darkTheme}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>サイト見出しh1</h1>
            <h2>サイト見出しh2</h2>
            <p>
              ディスクリプションディスクリプションディスクリプションディスクリプションディスクリプション
            </p>
            <button className="primary-btn">お問い合わせ</button>
          </div>
        </section>
      </div>
    </>
  );
}
