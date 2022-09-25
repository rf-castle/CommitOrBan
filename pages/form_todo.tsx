/* eslint-disable*/
import Link from 'next/link'
import type { NextPage } from 'next'
import styles from '../styles/Form.module.css'
import { useState } from 'react'
import { Todo, addTodo } from '../lib/todo'

const Form: NextPage = () => {
  const [text, setText] = useState('')
  const [limit, setLimit] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const today = new Date()

  // todos ステートを更新する関数
  const handleOnSubmit = function (): void {
    // 何も入力されていなかったらリターン
    if (text.length === 0) return

    // 新しい Todo を作成
    const newTodo: Todo = {
      done: false,
      title: text,
      limit: new Date(limit),
      id: today.getTime(),
    }
    void addTodo(newTodo).then((r) => r)
    setTodos([newTodo, ...todos])
    // フォームへの入力をクリアする
    setText('')
    setLimit('')
  }

  function convertDateToDateTime(day: Date): string {
    const year = day.getFullYear()
    const month = `0${day.getMonth() + 1}`.slice(-2)
    const date = day.getDate()
    const hour = `0${day.getHours() + 1}`.slice(-2)
    const minute = day.getMinutes()
    const dateTime = `${year}-${month}-${date}T${hour}:${minute}`
    return dateTime
  }

  /**
   * キー名 'local-todos' のデータを取得
   * 第 2 引数の配列が空なのでコンポーネントのマウント時のみに実行される
   */
  // useEffect(() => {
  //   getTodo()
  //     .then((values) => setTodos(values))
  //     .catch((err) => console.error(err))
  // }, [])

  /**
   * todos ステートが更新されたら、その値を保存
   */

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleOnSubmit()
        }}
      >
        <div className={styles.wrap}>
          <div className={styles.body}>
            <div className={styles.title}>
              <h1>目標設定をしよう！！</h1>
            </div>
            <div className={styles.field}>
              <label>
                <i className={styles.calendar}></i>目標
              </label>
              <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className={styles.field}>
              <label>
                <i className={styles.calendar}></i>期日
              </label>
              <input
                type='datetime-local'
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                min={convertDateToDateTime(today)}
              />
            </div>
            <div className={styles.create_button}>
              <input type='submit' value='追加' onSubmit={handleOnSubmit} />
            </div>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Link href='/list'>
            <a>一覧へ</a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Form
/* eslint-disable*/
