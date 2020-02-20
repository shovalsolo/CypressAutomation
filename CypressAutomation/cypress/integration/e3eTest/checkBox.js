//This is a template file 

describe('CheckBox demo', function(){
	
	beforeEach(function(){										//This will run before each test
		cy.visit('https://the-internet.herokuapp.com/checkboxes')
		
	})

	it('CheckBox first element check', function(){
		
		cy.get(':checkbox').first().check()			//using the : is referring to type Attribute name
		//cy.get('[type=checkbox]').first().check()			//Same as the the line before

	})
	
	it('CheckBox checking for a checked element', function(){
		
		cy.get('[type=checkbox]:eq(1)').should('be.checked')

	})
})