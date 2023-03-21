import { describe, it, expect } from 'vitest'
import * as TodoAPI from '../services/TodoAPI'
import { CreateTodoData } from '../types/Todo'

const newTodo: CreateTodoData = { title: 'new todo', completed: true }


describe('TodoAPI', () => {

	it('should return a list', async () => {
		const todos = await TodoAPI.getTodos()

		expect(Array.isArray(todos)).toBe(true)
	})

	it('should create a new todo', async () => {
		const todo = await TodoAPI.createTodo(newTodo)

		expect(todo).toMatchObject({
			id: expect.any(Number),
			title: newTodo.title,
			completed: newTodo.completed
		})
	})

	it('should create and then get the todo', async () => {
		const todo = await TodoAPI.createTodo(newTodo)

		const thatTodo = await TodoAPI.getTodo(todo.id)

		expect(thatTodo.id).toEqual(todo.id)
	})

	it.todo('should create and then find the todo among all todos', () => {

	})

	it.todo('should create and then update a todo', async () => {
		const todo = await TodoAPI.createTodo(newTodo)

		const updateData = {
			title: 'updatedTitle',
			completed: false
		}

		const updatedTodo = await TodoAPI.updateTodo(todo.id, updateData)

		expect(updatedTodo).toMatchObject({
			id: expect.any(Number),
			title: updatedTodo.title,
			completed: updatedTodo.completed
		})
	})

	it.todo('should create and then delete a todo', async () => {
		const todo = await TodoAPI.createTodo(newTodo)

		const deletedTodo = await TodoAPI.deleteTodo(todo.id)

		expect(deletedTodo.id).toEqual(todo.id)
	})
})
