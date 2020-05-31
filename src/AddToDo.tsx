import React, { useState } from 'react'

interface Props {
  onSubmit: (title: string) => void
}

const AddToDo: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('')

  return <>
    <h1>To Do List demo in React and TypeScript</h1>
    Add a To Do: <input
      value={title}
      onChange={(evt) => setTitle(evt.target.value)}
      onKeyPress={evt => {
        if (evt.key === 'Enter') {
          onSubmit(title)
          setTitle('')
        }
      }}
    />
  </>
}

export default AddToDo
