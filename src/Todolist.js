import React from 'react'
import Task from './Task'

export default function Todolist({ todoss, toggleTodo }) {
	return (
			todoss.map(todo => {
				return <Task key={todo} toggleTodo={toggleTodo} todo={todo} />
			})
	)
}
