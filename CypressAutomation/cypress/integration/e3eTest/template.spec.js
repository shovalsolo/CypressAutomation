//This is a template file 

describe('Template demo', function(){

	it('Login to page demo', function(){
		
		cy.visit('https://www.saucedemo.com/index.html')					//Will open the link from cypress.json baseUrl
		cy.get('').type('')													//Will search an id and will send keys
		cy.get('').type('')													//Will search an id and will send keys
		cy.get('').click()													//Will search an id and will click on it
		
	})
})