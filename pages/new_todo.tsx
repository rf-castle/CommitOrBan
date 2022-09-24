import type { NextPage } from 'next'
// import Head from 'next/head'
// import Link from 'next/link'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

type Todo = {
  value: string
  readonly id: number
}

const Form: NextPage = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  // todos ステートを更新する関数
  const handleOnSubmit = function (): void {
    // 何も入力されていなかったらリターン
    if (text.length === 0) return

    // 新しい Todo を作成
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
    }
    setTodos([newTodo, ...todos])
    // フォームへの入力をクリアする
    setText('')
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleOnSubmit()
        }}
      >
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <input type='submit' value='追加' onSubmit={handleOnSubmit} />
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.value}</li>
        })}
      </ul>
    </div>
  )
}

export default Form
