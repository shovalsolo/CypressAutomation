//This is a template file 

describe('Handeling alerts demo', function(){
	
	this.beforeEach(function(){
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
	})

	it('Java script alert', function(){
		cy.contains('Click for JS Alert').click()
	})
	
	it('Java script alert get text', function(){
		cy.on('window:alert', function(alertText){
			expect(alertText).eq('I am a JS Alert')
		})
	})
})