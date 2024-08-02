import styles from "./styles/FilterPanel.module.scss";

interface FilterPanelProps {
  filters: string[];
  setFilters: (filters: string[]) => void;
}

const FilterPanel = ({ filters, setFilters }: FilterPanelProps) => {
  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  return (
    <div className={styles.filterPanel}>
      {filters.map((filter) => (
        <span key={filter} className={styles.filterTag}>
          {filter}
          <button
            onClick={() => removeFilter(filter)}
            className={styles.removeButton}
          >
            x
          </button>
        </span>
      ))}
    </div>
  );
};

export default FilterPanel;
