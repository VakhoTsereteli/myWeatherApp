import axios from "axios";
import type { WeatherData } from "@/types/weather"

import { useWeatherStore } from "@/store/useWeatherStore";

export const useLocationWeather = async (place_id: string): Promise<WeatherData> => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await axios.get(
      `https://www.meteosource.com/api/v1/free/point?place_id=${place_id}&sections=all&timezone=UTC&language=en&units=metric&key=${api_key}`
    );

    return response.data
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // Rethrow to be caught in the calling function
  }
}

