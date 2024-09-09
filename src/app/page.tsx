"use client";
import styles from "./page.module.css"

import { useWeatherStore } from "@/store/useWeatherStore";

export default function Home() {


  const weather = useWeatherStore((state) => state.weather)
  return (
    <main>
      {weather?.current.temperature}
    </main>
  );
}
