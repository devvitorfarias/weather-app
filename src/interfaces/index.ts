export interface Coordinates {
    lon: number;
    lat: number;
  }
  
export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
export interface Wind {
    speed: number;
    deg: number;
  }
  
export interface Clouds {
    all: number;
  }
  
export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  
export interface WeatherData {
    coord: Coordinates;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  
  export interface IWeatherData {
    coord: {
      lon: -48.5585,
      lat: -27.5935
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d"
      }
    ],
    base: "stations",
    main: {
      temp: 29.95,
      feels_like: 35.91,
      temp_min: 27.1,
      temp_max: 30.55,
      pressure: 1005,
      humidity: 74
    },
    visibility: 10000,
    wind: {
      speed: 7.2,
      deg: 350
    },
    clouds: {
      all: 0
    },
    dt: 1714236370,
    sys: {
      type: 2,
      id: 2012878,
      country: "BR",
      sunrise: 1714210666,
      sunset: 1714250734
    },
    timezone: -10800,
    id: 3463237,
    name: "Florianópolis",
    cod: 200
  };
  
  