import { Todo } from '../types/Todo'

// render output to DOM
export const render = (elemtnt: HTMLElement, html: string) => {
	elemtnt.innerHTML = html
}

// render todos
export const renderTodos = (todos: Todo[]) => {

	render(
		document.querySelector<HTMLUListElement>('#todos')!,
		transformTodosToHtml(todos)
	)
	// replace todosList content
	const todosEl = document.querySelector<HTMLUListElement>('#todos')!
	todosEl.innerHTML = transformTodosToHtml(todos)
}

// transform todos to HTML(-string)
export const transformTodosToHtml = (todos: Todo[]) => {
	return todos
		.map(todo =>
			`<li class="list-group-item todo ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
			<span class="todo-title">${todo.title}</span>
			${todo.completed
				? '<span class="delete-todo" role="button" title="Delete todo">🗑️</span>'
				: ''
			}
		</li>`
		)
		.join('')
}
