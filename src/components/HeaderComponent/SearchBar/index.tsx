"use client";

import { useState } from "react";
import React from "react";
import axios from "axios";
import SearchBarUI from "./SearchBarUI";
import type { Location } from "@/types/location";
import type { WeatherData } from "@/types/weather";
import { useLocationWeather } from "@/hooks/useLocationWeather";
import { useWeatherStore } from "@/store/useWeatherStore";

export default function SearchBar() {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const findLocation = async (query: string): Promise<Location[] | null> => {
    try {
      const response = await axios.get(
        `https://www.meteosource.com/api/v1/free/find_places_prefix?text=${query}&key=${api_key}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching place:", error);
      return null;
    }
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [locationResults, setLocationResults] = useState<Location[] | null>(null);

  const setWeather = useWeatherStore((state) => state.setWeather)

  const handleSearchQuery = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);

    if (newQuery.length >= 3) {
      const results = await findLocation(newQuery);
      setLocationResults(results);
    } else if (newQuery.length === 0) {
      setLocationResults(null); // Clear results when input is empty
    }
  };

  const handleSelect = async (selectedLocation: Location) => {
    try {
      const weather = await useLocationWeather(selectedLocation.place_id); // Assume `place_id` is used here
      setWeather(weather)
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  return (
    <SearchBarUI
      searchQuery={searchQuery}
      handleSearchQuery={handleSearchQuery}
      results={locationResults}
      onSelect={handleSelect} // Pass the select handler to UI
    />
  );
}

