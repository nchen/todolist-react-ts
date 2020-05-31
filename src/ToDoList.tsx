import React, { useState } from 'react'
import ToDoListItem from './ToDoListItem'
import AddToDo from './AddToDo'
import { ToDo } from './ToDoListTypes'

export const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([])
  const [showCompleted, setShowCompleted] = useState<boolean>(true)
  const filteredToDos = todos.filter(item => {
    return !item.completed ||
      (item.completed && showCompleted)
  })

  return <>
    <AddToDo onSubmit={title => {
      const todo: ToDo = {
        title,
        completed: false
      }
      setTodos([todo, ...todos])
    }} />

    <div>
      {filteredToDos.map(item =>
        <ToDoListItem key={item.title}
          todo={item} onSetCompleted={(title, completed) => {
            const newTodos = todos.map(i => {
              if (i.title === title) {
                i.completed = completed
                return i;
              }
              return i;
            });
            setTodos(newTodos);
          }} />
      )}
    </div>

    Show Completed: <input type="checkbox"
      checked={showCompleted}
      onChange={evt => {
        setShowCompleted(!showCompleted)
      }} />
  </>
}