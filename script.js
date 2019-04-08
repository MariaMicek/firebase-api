const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Kielce&APPID=0b3d75e5a49f2a267f054a0a60bed6f3&units=metric'

const config = {
    method: 'POST',
    header: {
        'X-my-header': 'one two three'
    },
    body: JSON.stringify({name: 'Ala', surname: 'Makotowska'})
}

fetch(apiUrl, config)
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

