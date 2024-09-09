import { Icon } from "@iconify-icon/react";
import styles from "./SearchBar.module.css";
import React from "react";
import type { Location } from "@/types/location";

type Props = {
  searchQuery: string;
  handleSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  results: Location[] | null;
  onSelect: (location: Location) => void;

}

export default function SearchBarUI({ searchQuery, handleSearchQuery, results, onSelect }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Icon icon="bi:search" />
        <input
          type="text"
          placeholder="Search for your preferred location..."
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </div>
      {results && (
        <div className={styles.results}>
          {results.length > 0 ? (
            <ul>
              {results.map((result) => (
                <li
                  key={result.place_id}
                  onClick={() => { onSelect(result) }}
                >
                  {result.name}, {result.country}
                </li>
              ))}
            </ul>
          ) : (
            <h3>No results</h3>
          )}
        </div>
      )}
    </main>
  );
}

