export const makeTemperatureColor = (temperature: number) => {
  return temperature > 28
    ? 'temperatureHigh'
    : temperature < 23
    ? 'temperatureLow'
    : 'temperatureNormal'
}

export const makeHumidityColor = (humidity: number) => {
  return humidity > 80
    ? 'humidityHigh'
    : humidity < 30
    ? 'HumidityLow'
    : 'humidityNormal'
}
