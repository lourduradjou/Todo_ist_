import React from 'react'

export default function Task({todo, toggleTodo}) {
	function handleCheck() {
		toggleTodo(todo.id)
	}
	return (
		<>
			<div>
				<label >
					<input type="checkbox" onChange={handleCheck} checked={todo.complete} />
					{todo.name}
				</label>
			</div>
		</>
	)
}
