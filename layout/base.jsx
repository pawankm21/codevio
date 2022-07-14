import React from "react";
import Head from "next/head";
import styles from "./base.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function BaseLayout({children}) {
  return (
    <div className={styles.container} id="container">
      <Head>
        <title>Codevio | Collaborate</title>
        <meta
          name="description"
          content="Collaborative interview preparation "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
