export async function getTemperature(city: string): Promise<number> {
  const encodedCity = encodeURIComponent(city.trim());
  const url = `https://wttr.in/${encodedCity}?format=j1`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch weather data: ${res.statusText}`);
  }

  const data = await res.json();

  const tempC = data?.current_condition?.[0]?.temp_C;
  if (tempC === undefined) {
    throw new Error(`Couldn't get temperature for city "${city}".`);
  }

  return parseFloat(tempC);
}
