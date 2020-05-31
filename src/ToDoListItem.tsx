import React, { useState } from 'react'
import { ToDo } from './ToDoListTypes'

interface Props {
  todo: ToDo,
  onSetCompleted: (title: string, completed: boolean) => void
}

const ToDoListItem: React.FC<Props> = ({ todo, onSetCompleted }) => {
  const [completed, setCompleted] = useState(todo.completed)

  return <div style={{
    border: '1px solid #ccc',
    padding: '10px',
    margin: '5px',
    textDecoration: completed ? 'line-through' : '',
    color: completed ? 'red' : 'blue'
  }}
    onClick={() => {
      const newValue = !completed
      setCompleted(newValue)
      onSetCompleted(todo.title, newValue)
    }
    }>{todo.title}</div>
}

export default ToDoListItem
