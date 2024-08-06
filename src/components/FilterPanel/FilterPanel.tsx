import { useEffect } from "react";
import Image from "next/image";
import styles from "./styles/FilterPanel.module.scss";

interface FilterPanelProps {
  filters: string[];
  onFilterChange: (filters: string[]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
}) => {
  const handleRemoveFilter = (filter: string) => {
    onFilterChange(filters.filter((f) => f !== filter));
  };

  const handleClearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div className={styles.filterTag} key={filter}>
            {filter}
            <button
              onClick={() => handleRemoveFilter(filter)}
              className={styles.removeButton}
            >
              <Image
                src="assets/images/icon-remove.svg"
                alt="Remove filter"
                width={16}
                height={16}
              />
            </button>
          </div>
        ))}
      </div>
      {filters.length > 0 && (
        <button onClick={handleClearFilters} className={styles.clearButton}>
          Clear
        </button>
      )}
    </div>
  );
};

export default FilterPanel;
