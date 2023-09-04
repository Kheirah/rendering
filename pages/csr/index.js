import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CSR() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);

  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h1 className={styles.center}>Client-side Rendering (CSR)</h1>
      <div className={styles.center}>{joke}</div>
      <div className={styles.center}>
        <a
          href="https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Read more <span>-&gt;</span>
          </h2>
          <p>
            In Client-Side Rendering (CSR) with React, the browser downloads a
            minimal HTML page and the JavaScript needed for the page.
          </p>
        </a>
      </div>
    </div>
  );
}
