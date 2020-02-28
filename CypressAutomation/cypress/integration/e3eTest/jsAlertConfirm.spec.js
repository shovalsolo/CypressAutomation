//This is a demo for alert confirmation messaga handle OK and cancel

describe('Handeling alerts demo', function(){
	
	this.beforeEach(function(){
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
	})

	it('Confirm type alert click OK', function(){
		cy.contains('Click for JS Confirm').click()			//Clicking on the button to trigger the Confirm alert by default clicking the OK button
	})
	
	it('Confirm type alert click Cancel', function(){	//Choosing false is that is the cancel button in the confirmation message
	cy.on('window:confirm', function(confirmText){
			return false
		})
		cy.contains('Click for JS Confirm').click()	
	})
})