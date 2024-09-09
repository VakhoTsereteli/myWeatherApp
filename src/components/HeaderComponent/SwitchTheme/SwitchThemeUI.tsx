import { Icon } from "@iconify-icon/react";
import styles from "./SwitchTheme.module.css";

type Props = {
  isDark: boolean;
  toggle: () => void;
};

export default function SwitchThemeUI({ isDark, toggle }: Props) {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={toggle}>
        <Icon icon="ph:sun-fill" className={styles.mode_icon} style={{ color: "yellow" }} />
        {isDark ? (
          <Icon icon="line-md:switch-off-to-switch-transition" className={styles.switch_icon} />
        ) : (
          <Icon icon="line-md:switch-to-switch-off-transition" className={styles.switch_icon} />
        )}
        <Icon icon="ph:moon-fill" className={styles.mode_icon} style={{ color: "#000" }} />
      </button>
    </div>
  );
}

