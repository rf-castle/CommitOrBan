import type { NextPage } from 'next'
// import Head from 'next/head'
// import Link from 'next/link'
import styles from '../styles/Form.module.css'
import { useState, useEffect } from 'react'
import { Todo, addTodo, getTodo } from '../lib/todo'
import Link from 'next/link'

const Form: NextPage = () => {
  const [text, setText] = useState('')
  const [limit, setLimit] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  // todos ステートを更新する関数
  const handleOnSubmit = function (): void {
    // 何も入力されていなかったらリターン
    if (text.length === 0) return

    // 新しい Todo を作成
    const newTodo: Todo = {
      done: false,
      title: text,
      limit: new Date(limit),
      id: new Date().getTime(),
    }
    void addTodo(newTodo).then((r) => r)
    setTodos([newTodo, ...todos])
    // フォームへの入力をクリアする
    setText('')
    setLimit('')
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
        <div className={styles.hoge}>
          <div className={styles.body}>
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
              <input type='datetime-local' value={limit} onChange={(e) => setLimit(e.target.value)} />
            </div>
            <div className={styles.create_button}>
              <input type='submit' value='追加' onSubmit={handleOnSubmit} />
            </div>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          {/* ここにボタンを記述 （suzuki） */}
          <Link href='/list'>
            <a>一覧へ</a>
          </Link>
        </div>
      </form>
      <ul>
        {/* {todos.map((todo) => {
          return <li key={todo.id}>{`${todo.title} ${todo.limit.toLocaleDateString()}`}</li>
        })} */}
      </ul>
    </div>
  )
}

export default Form
