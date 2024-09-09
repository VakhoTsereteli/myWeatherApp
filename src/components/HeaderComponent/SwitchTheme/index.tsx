"use client"
import { useState } from "react"
import SwitchThemeUI from "./SwitchThemeUI"

export default function SwitchTheme() {

  const [isDark, setIsDark] = useState<boolean>(true);

  const toggle = (): void => {
    setIsDark(prevState => !prevState)
  }


  return (
    <SwitchThemeUI
      isDark={isDark}
      toggle={toggle}
    />
  )
}
