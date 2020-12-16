import styles from 'styles/Home.module.less'
import {Button} from 'antd'
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
            <Button type='primary'>我是按钮，你是吗</Button>
            <span className='my-span'>Welcome to</span>
            <a href="https://nextjs.org">Next.js!</a>
            <span className={styles.lili}>试验一下less定义的全局样式是否起作用了</span>
        </h1>
      </main>
    </div>
  )
}
