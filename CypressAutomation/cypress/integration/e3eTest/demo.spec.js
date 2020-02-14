it('Login to page', function(){
	
	cy.visit('/')																			//Will open the link from cypress.json baseUrl
	cy.get('#txtUsername').type('Admin')													//Will search an id and will send keys
	cy.get('#txtPassword').type('admin123')													//Will search an id and will send keys
	cy.get('#btnLogin').click()																//Will search an id and will click on it
	
	cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')	//Will verify the the url is equel to this url
	
})