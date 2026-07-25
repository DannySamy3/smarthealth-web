"use client";

import styles from "./StoreButtons.module.css";

interface StoreButtonsProps {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  showLabel?: boolean;
}

export default function StoreButtons({ size = "md", align = "left" }: StoreButtonsProps) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      <div className={`${styles.buttonsGroup} ${styles[size]}`}>
        {/* Apple App Store Button (Vibrant Brand Blue) */}
        <a 
          href="#download-app" 
          className={`${styles.storeBtn} ${styles.blueBtn}`}
          aria-label="Download Smart Health on Apple App Store"
        >
          <div className={styles.iconWrap}>
            <svg width="22" height="26" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-12.9 69.5-34.3z"/>
            </svg>
          </div>
          <div className={styles.btnText}>
            <span className={styles.subtext}>Download on the</span>
            <span className={styles.maintext}>App Store</span>
          </div>
        </a>

        {/* Google Play Store Button (Sleek Dark Black) */}
        <a 
          href="#download-app" 
          className={`${styles.storeBtn} ${styles.darkBtn}`}
          aria-label="Get Smart Health on Google Play Store"
        >
          <div className={styles.iconWrap}>
            <svg width="22" height="24" viewBox="0 0 512 512" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-59.8 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 59.2-34.1c16.6-9.6 24.7-27.5 24.7-44.4 0-17-8.1-34.9-25-44.5zM104.6 499l220.7-221.3 59.8 60.1L104.6 499z"/>
            </svg>
          </div>
          <div className={styles.btnText}>
            <span className={styles.subtext}>GET IT ON</span>
            <span className={styles.maintext}>Google Play</span>
          </div>
        </a>
      </div>
    </div>
  );
}
