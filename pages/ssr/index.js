import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  console.log("Hello from getServerSideProps");
  return {
    props: {
      joke: data.value,
    },
  };
}

export default function SSR({ joke }) {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h1 className={styles.center}>Server-side Rendering (SSR)</h1>
      <div className={styles.center}>{joke}</div>
      <div className={styles.center}>
        <a
          href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Read more <span>-&gt;</span>
          </h2>
          <p>
            If a page uses Server-side Rendering, the page HTML is generated on
            each request.
          </p>
        </a>
      </div>
    </div>
  );
}
