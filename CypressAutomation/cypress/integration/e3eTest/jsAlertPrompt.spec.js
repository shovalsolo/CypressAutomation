//This is a demo for alert Prompt and sending text

describe('Handeling alerts-  prompt alert demo', function(){
	
	this.beforeEach(function(){
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
	})

	
	it('Prompt type - Alert', function(){
		
		cy.window().then(function($win){
			
			cy.stub($win, 'prompt').returns('Hello - 1 - 2 - 3 test')		//Sending text to the prompt alert
			cy.contains('Click for JS Prompt').click()						//Clicking on the button with text Click for JS Prompt
		
		})
		
	})
})