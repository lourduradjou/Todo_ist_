import React from 'react'
import Todolist from './Todolist'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'


export default function App() {
	const [todos, setTodos] = useState([])
	const inputValue  = useRef()

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (storedTodos) setTodos(storedTodos)
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
		}, [todos]
	)

	function toggleTodo(id) {
		const newTodos = [...todos]
		const todo = newTodos.find(todo => todo.id === id)
		todo.complete = !todo.complete
		setTodos(newTodos)
	}

	function removeCompleted_Tasks() {
		const old_tasks = todos.filter(todo => !todo.complete)
		setTodos(old_tasks)
	}
	function handleAddTodo(e) {
		const name = inputValue.current.value;
		if (name === '') return 
		setTodos(prevTodos => {
			return [...prevTodos, {id : uuidv4(), name: name, complete: false}]	
		})
		inputValue.current.value  = null
	}
	return (
		<>
			<Todolist todoss={todos} toggleTodo={toggleTodo}/>
			<input ref={inputValue} type='text' />
			<button onClick={handleAddTodo}>Add Task</button>
			<button onClick={removeCompleted_Tasks}>Remove Completed</button>
			<div>{todos.filter(todo => !todo.complete).length} Left over taks</div>
		</>
	)
}
