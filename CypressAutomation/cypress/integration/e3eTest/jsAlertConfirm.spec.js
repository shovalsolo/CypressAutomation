//This is a demo for alert messaga handle

describe('Handeling alerts demo', function(){
	
	this.beforeEach(function(){
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
	})

	it('Confirm type alert click OK', function(){
		cy.contains('Click for JS Confirm').click()			//Clicking on the button to trigger the Confirm alert by default clicking the OK button
	})
	
	it.only('Confirm type alert click Cancel', function(){
		cy.on('confirm', function(confirmText){
			return false
		})
		cy.contains('Click for JS Confirm').click()	
	})
})