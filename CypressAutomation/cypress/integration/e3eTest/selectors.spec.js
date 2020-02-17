//This is a demo for selectors

describe('Selectors demo', function(){

	it('cypress selectors', function(){
		
		cy.visit('https://www.saucedemo.com/index.html')					//Will open the link from cypress.json baseUrl
		cy.get('#user-name').type('standard_user')							//Will search an id and will send keys using ID #
		cy.get('input[data-test=password]').type('secret_sauce')			//Will search an id and will send keys using Element name + attribute
		cy.get('[type=submit]').click()										//Will search an id and will click on it using Attribute name + attribute value
		
	})
})