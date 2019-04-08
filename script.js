fetch('https://api.openweathermap.org/data/2.5/weather?q=Kielce')
.then(response => {
	if(response.ok) {
	return response.json();
 }
 	throw new Error('Oh no... API error!')
})
.then(data => console.log(data))
.catch(error => {
 	console.log('There has been a problem: ' + error.message)
 })

