//This is a template file 

describe('Handeling alerts demo', function(){
	
	this.beforeEach(function(){
		
	})

	it('Java script alert', function(){
		
		cy.visit('https://www.saucedemo.com/index.html')					//Will open the link from cypress.json baseUrl
		cy.get('').type('')													//Will search an id and will send keys
		cy.get('').type('')													//Will search an id and will send keys
		cy.get('').click()													//Will search an id and will click on it
		
	})
})