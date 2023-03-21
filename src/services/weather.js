// This is a service that will be used to get the weather from a city
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5f1498eddmsha59d546fb712fe7p141275jsn26197660b919',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

// This function gets the weather from a city using the weatherapi-com API.
// It gets the city name as a parameter.
// It returns the weather data of the city as an object.
export const getWeatherFrom = async (query = 'Bogota') => {
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		options
	);
	// wait for the response
	const data = await response.json();
	// destructuring
	const { location, current } = data;
	const { name, country, localtime } = location;
	const { temp_c, condition, humidity, feelslike_c, is_day, wind_kph, wind_dir } = current;
	const { code, text, icon } = condition;
	return {
		icon,
		code,
		text,
		name,
		country,
		localtime,
		temp_c,
		condition,
		humidity,
		feelslike_c,
		is_day,
		wind_kph,
		wind_dir
	};
};
