import type { NextPage } from 'next'
// import Head from 'next/head'
// import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import UploadImage from '../components/UploadImage'
import { Todo, addTodo, getTodo } from '../lib/todo'

const Form: NextPage = () => {
  const [text, setText] = useState('')
  const [limit, setLimit] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  // todoを作成する関数
  const handleOnSubmit = function (): void {
    // 何も入力されていなかったらリターン
    if (text.length === 0) return

    // 新しい Todo を作成
    const newTodo: Todo = {
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
  useEffect(() => {
    getTodo()
      .then((values) => setTodos(values))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleOnSubmit()
        }}
      >
        <div className='field'>
          <label>
            <i className='calendar'></i>目標
          </label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='field'>
          <label>
            <i className='calendar'></i>期日
          </label>
          <input type='date' value={limit} onChange={(e) => setLimit(e.target.value)} />
        </div>
        <div className='field'>
          <label>
            <i className='image'></i>画像
          </label>
          <UploadImage />
        </div>
        <div className='create_button'>
          <input type='submit' value='追加' onSubmit={handleOnSubmit} />
        </div>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{`${todo.title} ${todo.limit.toLocaleDateString()}`}</li>
        })}
      </ul>
    </div>
  )
}

export default Form
