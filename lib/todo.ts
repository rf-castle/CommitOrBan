import localforage from 'localforage'
import { Todo } from '../pages/form_todo'

export async function addTodo(todos: Todo[]): Promise<void> {
  // todoを追加する
  await localforage.setItem('local-todos', todos)
}

export async function getTodo(): Promise<Todo[]> {
  // todoを取得する
  const todos = await localforage.getItem('local-todos')
  if (todos === undefined || todos === null) {
    return []
  } else {
    return todos as Todo[]
  }
}
