import styles from "./CurrentLocation.module.css";

import { Icon } from "@iconify-icon/react"



type Props = {
  getCurrentLocation: () => Promise<void>
}

export default function CurrentLocationUI({ getCurrentLocation }: Props) {
  return (
    <div>
      <div
        className={styles.btn}
        onClick={getCurrentLocation}>
        <Icon
          className={styles.icon}
          icon="mingcute:location-2-line"
        />
        <span>Current Location</span>
      </div>
    </div>
  )
}
