import * as React from 'react'
import './App.css'

type Todo = {
  title: string,
  completed: boolean,
  code?: number
}

const App = () => {

  const inputRef = React.useRef<HTMLInputElement>(null)
  const [title, setTitle] = React.useState("")
  const [todos, setTodos] = React.useState<Todo[]>([])

  const addTodo = () => {
    if (title == '') return;
    setTodos(prev => [...prev, {
      title: title,
      completed: false // default: false
    }])
    setTitle("")
    inputRef.current?.focus()
  }

  // comment added again

  // master branch commented

  return (
    <>
      <input ref={inputRef}
             value={title}
             onKeyUp={(e) => {
               if (e.key == 'Enter') {
                 addTodo()
               }
             }}
             onChange={e => setTitle(e.target.value)}
             style={{width: 500, padding: 20, fontSize: 20, border: '1px solid #fff4', borderRadius: 20}}/>
      <br/>
      <br/>
      {todos.map((todo, index) => {
        return <div>
          <span style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            opacity: todo.completed ? .5 : 1
          }}
                onClick={() => {
                  const lastTodos = [...todos]
                  lastTodos[index].completed = !lastTodos[index].completed
                  setTodos(lastTodos)
                }}>{todo.title}</span>
          {' '}
          <button onClick={() => {
            if (confirm("Are you sure to delete this todo?")) {
              setTodos(todos.filter((_, i) => i != index))
            }
          }}>
            ×
          </button>
        </div>
      })}
    </>
  )
}

export default App
