"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import FilterPanel from "@/components/FilterPanel/FilterPanel";
import JobCard from "@/components/JobCard/JobCard";
import jobsData from "@/data/jobs";
import { Job } from "@/types/job";

const Home = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const handleFilterChange = (newFilters: string[]) => {
    setFilters(newFilters);
  };

  const handleTagClick = (tag: string) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  const filteredJobs =
    filters.length === 0
      ? jobsData
      : jobsData.filter((job) => {
          const tags = [job.role, job.level, ...job.languages, ...job.tools];
          return filters.every((filter) => tags.includes(filter));
        });

  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        {filters.length > 0 && (
          <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        )}
        {filteredJobs.map((job: Job) => (
          <JobCard key={job.id} job={job} onTagClick={handleTagClick} />
        ))}
      </main>
    </>
  );
};

export default Home;
