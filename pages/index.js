import styles from '../styles/Home.module.less'
import {Button} from 'antd'
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
            <Button type='primary'>我是按钮，你是吗</Button>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
