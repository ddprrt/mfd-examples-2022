import { useEffect, useState } from 'react'
import styles from '../styles/Todo.module.css'

type TodoProps = {
  items: Todo[]
}

export type Todo = {
  id: number,
  task: string,
  done: boolean
}

export function Todo({ items }: TodoProps) {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(items);

  const onChange = (id: number, done: boolean) => {
    setTodos((oldTodos) => {
      const tod = [...oldTodos]
      tod[id].done = done;
      return tod
    });
  };

  useEffect(() =>{
    fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(todos)
    })
  }, [todos])

  return <>
    <ol className={styles.todolist}>
      {todos.map((el) => <TodoItem {...el} onChange={onChange} onDelete={(id) => {
        setTodos((oldTodos) => {
          const tods = [...oldTodos.slice(0, id), ...oldTodos.slice(id+1)];
          return tods;
        })
      }} />)}
    </ol>
    <div className={styles.todoform}>
      <input value={newTodo} onChange={(el) => setNewTodo(el.target.value)} className={styles.todoinput} type="text" name="" id="" />
      <button className={styles.todobutton} type="button" onClick={() => {
        setTodos([
          ...todos,
          { id: (todos.at(-1)?.id ?? todos.length + 1), task: newTodo, done: false }
        ]);
        setNewTodo("");
      }}>Add</button>
    </div>
  </>;
}

type TodoItemProps = Todo & {
  onChange: (id: number, done: boolean) => void
  onDelete: (id: number) => void
}

function TodoItem({ task, id, done, onChange, onDelete }: TodoItemProps) {
  let [doneState, setDoneState] = useState(done);
  let names = styles.todoitem;
  if(doneState) {
    names += " " + styles.done
  }
  return <li className={names} key={id}>
      {task}
      <button onClick={() => {
        const don = !doneState
        setDoneState(don)
        onChange(id, don)
      }}>☑️</button>
      <button onClick={() => {
        onDelete(id)
      }}>🗑</button>
    </li>
}