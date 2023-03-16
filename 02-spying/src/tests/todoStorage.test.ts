import { describe, test, expect, afterEach } from 'vitest'
import mockedLocalStorage from '../mocks/mockedLocalStorage'
import { Todo } from '../types/Todo'
import { getTodos, saveTodos } from '../utils/todoStorage'

global.localStorage = mockedLocalStorage()

const TODO: Todo = {
	id: 1,
	title: 'My first todo',
	completed: false,
}

describe('get todos', () => {

	test('returns empty list of todos', () => {
		const todos = getTodos()

		expect(todos.length).toBe(0)
	})
})

describe('save todos', () => {

	test('can save a todo', () => {
		const result = saveTodos([TODO])

		expect(result.success).toBe(true)

		afterEach(() => {
			global.localStorage.clear()
		})
	})

	test('can save a todo and then get it', () => {
		const result = saveTodos([TODO])
		expect(result.success).toBe(true)

		const todos = getTodos()
		expect(todos).toContainEqual(TODO)

		afterEach(() => {
			global.localStorage.clear()
		})
	})

})

