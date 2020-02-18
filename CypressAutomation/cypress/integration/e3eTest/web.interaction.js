//This is a demo for Asyncronized actions

describe('Asyncronized demo', function(){

	it('cypress Asyncronized', function(){
		
		cy.visit('https://the-internet.herokuapp.com/')	//Will open the link
		cy.get('h1').then(function(heading){			//Will go to h1 tag
			var headingString = heading.text()			//Will gte the text fro the h1 tag and save it to param
			cy.log(headingString)						//Will log out the string saved from the h1
			console.log('from inside')					//Print log a message will run after from out side message
		})							
										
		console.log('from outside')						//This will run before the from inside message
	})
})