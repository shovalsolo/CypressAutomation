describe('Input form', () => {
	
	beforeEach(() => {								//This will run before each test
		cy.visit('/')								//tacking the url from cypress.json file
	})
	
	
	it('focuses input on load',() => {				//This will check that we have this class 
		
		cy.focused().should('have.class','new-todo')
	})
	
	
	it('accepts input failed',() => {				//fail the check theat the text field exist when adding .only it will run only this test
	
		cy.get('.new-toda')
	})
	
	it('accepts input',() => {						//Will check theat the text field exist
		const typedText = 'Buy Milk'
		
		cy.get('.new-todo')
			.type(typedText)
			.should('have.value', typedText)
	})
	
	context('Form submission', () => {				//
		it.only('Adds a new todo on submit', () => {//
			cy.get('.new-todo')						//
				.type('Buy eggs')					//Send text
				.type('{enter}')					//Press on enter
		})
	})
	
})