import { create } from "zustand";
import type { WeatherData } from "@/types/weather";

type WeatherStore = {
  weather: WeatherData | null;
  setWeather: (data: WeatherData) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  weather: null,
  setWeather: (data: WeatherData) => set({ weather: data })
}))
