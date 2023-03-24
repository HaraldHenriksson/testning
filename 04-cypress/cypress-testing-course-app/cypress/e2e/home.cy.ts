describe('Home Page', () => {
	it('the h1 containes the correct text', () => {
		cy.visit('http://localhost:3000')

		cy.get('h1')
			.should('exist')
			.contains('Testing Next.js Applications with Cypress')
	})
})
