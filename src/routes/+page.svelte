<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	//
	const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
	<section>
		<h1>{weather.name}</h1>
		<h2>{weather.temp_c}°</h2>
		<h3>{weather.text}</h3>
		<img src={weather.icon} alt="icon" />
	</section>
	<WeatherFooter />
{/await}

<style>
	section {
		padding: 16px;
	}
	h1 {
		font-weight: 300;
		color: #333;
		text-transform: uppercase;
		padding: 32px 0;
	}
	h2 {
		font-weight: 300;
		font-size: 120px;
		color: #333;
		text-transform: uppercase;
		padding: 0;
	}
	h3 {
		font-weight: 800;
		transform: rotate(-90deg);
		position: absolute;
		top: 56px;
		right: 12px;
	}
	img {
		/* width: 100%; */
	}
</style>
