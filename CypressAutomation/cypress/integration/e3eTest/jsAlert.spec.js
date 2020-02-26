//This is a demo for alert messaga handle

describe('Handeling alerts demo', function(){
	
	this.beforeEach(function(){
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
	})

	it('Java script alert', function(){
		cy.contains('Click for JS Alert').click()			//Clicking on the button to trigger the alert
	})
	
	it('Java script alert get text', function(){
		cy.on('window:alert', function(alertText){			//Getting the window of the alert
			expect(alertText).eq('I am a JS Alert')			//Checking the thext of the alert
		})
	})
})