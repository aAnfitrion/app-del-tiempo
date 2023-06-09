<script>
  import { getWeatherFrom } from "../services/weather.js";
  const weatherPromise = getWeatherFrom()
</script>

<div class='border border-neutral-800 p-4 rounded-xl max-w-md mx-auto min-h-48 max-h-96 mt-48'>
  {#await weatherPromise then weather }
    <h4>{weather.locationName}</h4>
    <h3 class='text-8xl'>{weather.temperature}°</h3>
    <h2>{weather.conditionText}</h2>
    <h1>{weather.windSpeed}</h1>
  {/await}
</div>
