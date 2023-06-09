const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ff01acc76cmshf428cc9ea4499f5p1755e1jsn24fd3095aa53",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export async function getWeatherFrom(query = "Buenos Aires") {
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    FETCH_OPTIONS,
  );
  const data = await response.json();

  const { location, current } = data;
  const { country, localtime, name } = location;
  const {
    condition,
    humidity,
    feelslike_c,
    is_day,
    temp_c,
    wind_kph,
    wind_dir,
  } = current;
  const { code, text } = condition;

  return {
    conditionCode: code,
    conditionText: text,
    country,
    localtime,
    locationName: name,
    humidity,
    feelsLike: feelslike_c,
    isDay: is_day,
    temperature: temp_c,
    windSpeed: wind_kph,
    windDir: wind_dir,
  };
}
