import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rendering</title>
        <meta name="description" content="Rendering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Rendering with the&nbsp;
            <code className={styles.code}>Page Router</code>
          </p>
          <div>
            <a
              href="https://nextjs.org/docs/pages/building-your-application/rendering"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <Link href="/csr" className={styles.card}>
            <h2>
              Client-side Rendering <span>-&gt;</span>
            </h2>
            <p>Click to explore.</p>
          </Link>

          <Link href="/ssr" className={styles.card}>
            <h2>
              Server-side Rendering <span>-&gt;</span>
            </h2>
            <p>Click to explore.</p>
          </Link>

          <Link href="/ssg" className={styles.card}>
            <h2>
              Static Site Generation <span>-&gt;</span>
            </h2>
            <p>Click to explore.</p>
          </Link>

          <Link href="/isr" className={styles.card}>
            <h2>
              Incremental Static Regeneration <span>-&gt;</span>
            </h2>
            <p>Click to explore.</p>
          </Link>
        </div>
      </main>
    </>
  );
}
