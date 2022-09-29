import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon
        </h1>
        <p style={{maxWidth: '500px',textAlign: 'center'}}>
          We are a group of developers and designers, building unique software products and a great developer community.
        </p>
        <a href="https://t.co/7VVcPe8yU5"><img src="/discord-button.png" style={{height: '80px'}}/></a>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <a href="https://twitter.com/CodeDecoders">Twitter</a>/
          <a href="https://github.com/Code-Decoders">Github</a>/
          <a href="https://www.youtube.com/CodeDecoders">YouTube</a>
        </span>
      </footer>
    </div>
  );
}
