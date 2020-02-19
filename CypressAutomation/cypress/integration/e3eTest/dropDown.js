//This is a template file 

describe('Template demo', function(){
	
	beforeEach(function(){										//This will run before each test
		cy.visit('https://the-internet.herokuapp.com/dropdown')
		
	})

	it('dropdown option 1', function(){
		
		cy.get('#dropdown').select('1')					//will select by the value
	})
	
	it('dropdown option 2', function(){
		
		cy.get('#dropdown').select('Option 2')			//Will select by the text
	})
	
	it('dropdown option disabled', function(){
		
		cy.get('#dropdown').children().first().then(function(dropdownEle){	//
			cy.log(dropdownEle.text())
		})		
	})
})