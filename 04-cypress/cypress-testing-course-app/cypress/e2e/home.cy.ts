describe('Home Page', () => {

	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})
	it('the h1 containes the correct text', () => {

		cy.get('[data-test="hero-heading"]')
			.should('exist')
			.contains('Testing Next.js Applications with Cypress')
	})

	it('the fratures on the home page', () => {

		cy.get('dt')
			.eq(0)
			.contains('4 Courses')

		cy.get('dt')
			.eq(1)
			.contains('25+ Lessons')

		cy.get('dt')
			.eq(2)
			.contains('Free and Open Source')
	})


})
