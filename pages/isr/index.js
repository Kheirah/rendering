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
    revalidate: 10, // In seconds
  };
}

export default function SSG({ joke }) {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <h1 className={styles.center}>Incremental Static Regeneration (ISR)</h1>
      <div className={styles.center}>{joke}</div>
      <div className={styles.center}>
        <a
          href="https://nextjs.org/docs/pages/building-your-application/rendering/incremental-static-regeneration"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Read more <span>-&gt;</span>
          </h2>
          <p>
            Next.js allows you to create or update static pages after you’ve
            built your site.
          </p>
        </a>
      </div>
    </div>
  );
}
