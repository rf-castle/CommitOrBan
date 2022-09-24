import localforage from 'localforage'
import { Todo } from './form_todo'

export async function addTodo(todos: Todo[]): Promise<void> {
  // todoを追加する
  await localforage.setItem('local-todos', todos)
}
