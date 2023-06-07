<script>
  const options = {
    method: 'GET',
    headers: {
	  	'X-RapidAPI-Key': 'ff01acc76cmshf428cc9ea4499f5p1755e1jsn24fd3095aa53',
		  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	  }
  }

  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
