import localforage from 'localforage'
import { Todo } from './form_todo'

export async function getTodo(): Promise<Todo[]> {
  // todoを取得する
  const todos = await localforage.getItem('local-todos')
  if (todos === undefined || todos === null) {
    return []
  } else {
    return todos as Todo[]
  }
}
