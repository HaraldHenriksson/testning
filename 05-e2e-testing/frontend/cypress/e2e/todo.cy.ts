describe('Todos', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	context('initial state', () => {
		it('should se at least one todo', () => {
			cy.get('#todos')
				.find('li')
				.should('have.length.at.least', 1)
		})
	})

	context('create todo', () => {
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


