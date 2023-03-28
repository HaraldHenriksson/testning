describe('Todos', () => {
	context('initial state', () => {
		beforeEach(() => {
			cy.intercept('GET', 'http://localhost:3001/todos', {
				fixture: 'todos.json'
			})
			cy.visit('/')
			cy.wait(1500)
		})

		it('should see at two mocked todos', { defaultCommandTimeout: 6000 }, () => {
			cy.get('#todos')
				.find('li')
				.should('have.length', 2)

			cy.get('#todos')
				.find('li')
				.first()
				.should('have.class', 'completed')
				.contains('🧪 Learn Unit Testing')

			cy.get('#todos')
				.find('li')
				.last()
				.should('not.have.class', 'completed')
				.contains('🕵🏻‍♂️ Learn spying on functions')
		})

		it('should not show the error dialog', () => {
			cy.get('#error').should('not.be.visible')
		})
	})

	context('create todo', () => {
		beforeEach(() => {
			cy.visit('/')
			cy.wait(1500)
		})

		it('create todo form should be empty', () => {
			cy.get('#new-todo-title')
				.should('have.value', '')
		})

		it('cant create a todo without a title', () => {
			//cy.get('#new-todo-title').type('{enter}')
			cy.get('[type="submit"').click()
			cy.get('#error').should('be.visible').contains('Title cannot be empty')
		})

		it('can create a new todo (and se it in the list)', () => {
			cy.get('#new-todo-title').type('My test todo')
			cy.get('[type="submit"').click()

			cy.get('#todos')
				.find('li')
				.contains('My test todo')

			cy.get('#new-todo-title')
				.should('have.value', '')
		})

		it('can type in the create todo form and then reset the form', () => {
			cy.get('#new-todo-title').type('My ephemeral todo')
			cy.get('[type="reset"').click()
			cy.get('#new-todo-title')
				.should('have.value', '')
		})
	})
})


