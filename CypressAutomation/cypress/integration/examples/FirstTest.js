describe('MyTestSuite', function() {											//This is the first test suite
	
  it('Vreify title of the page-Positive', function() {							//This is the first test case
	
		cy.visit('https://demo.nopcommerce.com/')
		cy.title().should('eq','nopCommerce demo store')
	})
	
	it('Vreify title of the page-Negative', function() {						//This is the first test case
	
		cy.visit('https://demo.nopcommerce.com/')
		cy.title().should('eq','nopCommerce demo store1')
	})
})