import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  return {
    props: {
      joke: data.value,
    },
  };
}

export default function SSG({ joke }) {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h1 className={styles.center}>Static Site Generation (SSG)</h1>
      <div className={styles.center}>{joke}</div>
      <div className={styles.center}>
        <a
          href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Read more <span>-&gt;</span>
          </h2>
          <p>
            If a page uses Static Generation, the page HTML is generated at
            build time.
          </p>
        </a>
      </div>
    </div>
  );
}
