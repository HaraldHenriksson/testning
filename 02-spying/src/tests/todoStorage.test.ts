/**
 * @vitest-environment happy-dom
 */

import { describe, test, expect, afterEach, vi } from 'vitest'
// import mockedLocalStorage from '../mocks/mockedLocalStorage'
import { Todo } from '../types/Todo'
import { getTodos, saveTodos } from '../utils/todoStorage'

// global.localStorage = mockedLocalStorage()

const TODO: Todo = {
	id: 1,
	title: 'My first todo',
	completed: false,
}

describe('get todos', () => {

	test('returns empty list of todos', () => {
		const getItemSpy = vi.spyOn(global.localStorage, 'getItem')

		const todos = getTodos()

		expect(getItemSpy).toHaveBeenCalledOnce()
		expect(getItemSpy).toHaveBeenCalledWith('todos')
		expect(todos.length).toBe(0)
	})
})

describe('save todos', () => {

	test('can save a todo', () => {
		const setItemSpy = vi.spyOn(global.localStorage, 'setItem')
		const result = saveTodos([TODO])

		expect(setItemSpy).toHaveBeenCalledOnce()
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

