import { useEffect } from "react";
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
      {filters.map((filter) => (
        <div className={styles.filterTag} key={filter}>
          {filter}
          <button
            onClick={() => handleRemoveFilter(filter)}
            className={styles.removeButton}
          >
            x
          </button>
        </div>
      ))}
      {filters.length > 0 && (
        <button onClick={handleClearFilters} className={styles.clearButton}>
          Clear
        </button>
      )}
    </div>
  );
};

export default FilterPanel;
