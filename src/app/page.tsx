import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
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
        <Link href="/css" className={styles.card}>
          <h2>
            CSS <span>-&gt;</span>
          </h2>
          <p>
            Learn how to style Next.js apps using <code>css</code> files.
          </p>
        </Link>

        <Link href="/chakra" className={styles.card}>
          <h2>
            Chakra UI <span>-&gt;</span>
          </h2>
          <p>
            Learn how to style Next.js apps using <code>Chakra UI</code>.
          </p>
        </Link>

        <Link href="/how-to-make-css-in-js" className={styles.card}>
          <h2>
            How to make
            <br />
            CSS in JS <span>-&gt;</span>
          </h2>
          <p>Learn the Mechanisms of CSS in JS UI</p>
        </Link>

        <Link href="/vanilla-extract" className={styles.card}>
          <h2>
            Vanilla Extract <span>-&gt;</span>
          </h2>
          <p>
            Learn how to style Next.js apps using <code>Vanilla Extract</code>.
          </p>
        </Link>
      </div>
    </main>
  )
}
