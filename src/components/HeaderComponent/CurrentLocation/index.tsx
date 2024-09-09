
import { useWeatherStore } from "@/store/useWeatherStore";
import { useLocationWeather } from "@/hooks/useLocationWeather";
import { useCurrentLocation } from "@/hooks/useCurrentLocation";

import CurrentLocationUI from "./CurrentLocationUI";


export default function CurrentLocation() {

  const setWeather = useWeatherStore((state) => state.setWeather)

  const getCurrentLocation = async (): Promise<void> => {
    const currentLocation = await useCurrentLocation();
    const weather = await useLocationWeather(currentLocation);
    setWeather(weather);
  }

  return (
    <CurrentLocationUI
      getCurrentLocation={getCurrentLocation}
    />
  )
}
