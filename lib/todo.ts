import localforage from 'localforage'

export type Todo = {
  done: boolean
  title: string
  limit: Date
  readonly id: number
}

export async function addTodo(todo: Todo): Promise<void> {
  // todoを追加する
  const todos = await getTodo()
  const newTodos = [todo, ...todos]
  await localforage.setItem('local-todos', newTodos)
}

export async function editTodo(id: number): Promise<void> {
  const todos = await getTodo()
  const newTodos = todos.map((t) => {
    if (t.id === id) {
      t.done = true
    }
    return t
  })
  await localforage.setItem('local-todos', newTodos)
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
