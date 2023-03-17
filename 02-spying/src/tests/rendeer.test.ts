/**
 * @vitest-environment happy-dom
 */
import { Window } from 'happy-dom'
import { test, expect, describe, afterEach } from "vitest";
import { transformTodosToHtml } from '../utils/render'
import dummyTodos from "./testdata/todos";

const { document } = new Window()

describe('render the todos', () => {

	afterEach(() => {
		document.body.innerHTML = ''
	})

	test('outputs empty list when no todos exists', () => {

		const html = transformTodosToHtml([])

		expect(html).toBe('')
	})

	test('outputs a list with one todo', () => {
		const todoLIs = transformTodosToHtml([dummyTodos[0]])

		document.body.innerHTML = `<ul>${todoLIs}</ul>`
		expect(document.querySelectorAll('li.todo').length).toBe(1)
	})

	test('outputs a list with one complete todo', () => {
		const completed = dummyTodos.find(todo => todo.completed)!

		if (completed != undefined) {
			const todoLIs = transformTodosToHtml([completed])

			document.body.innerHTML = `<ul>${todoLIs}</ul>`
			expect(document.querySelectorAll('li.todo.completed').length).toBe(1)
		}
	})

	test('outputs a list with many todos', () => {
		const todoLIs = transformTodosToHtml(dummyTodos)

		document.body.innerHTML = `<ul>${todoLIs}</ul>`
		expect(document.querySelectorAll('li.todo').length).toBe(dummyTodos.length)
	})
})
