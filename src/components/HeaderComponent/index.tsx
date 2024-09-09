"use client"

import SwitchTheme from "./SwitchTheme";
import SearchBar from "./SearchBar";
import CurrentLocation from "./CurrentLocation";


import styles from "./Header.module.css"

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <SwitchTheme />
      <SearchBar />
      <CurrentLocation />
    </header>
  )
}
