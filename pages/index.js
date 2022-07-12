import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { useCallback } from 'react';
export default function Home() {
  const onChange = useCallback((value, changeValue) => {
    console.log(value);
    console.log(changeValue);
  },[]);
  
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  id="main">
        <CodeMirror
          value="console.log('hello world!');"
          height="100vh"
          width="100vw"
          theme={sublime}
          extensions={[java(), cpp(), python()]}
          onChange={onChange}
        />
      </main>

      <footer></footer>
    </div>
  );
}
