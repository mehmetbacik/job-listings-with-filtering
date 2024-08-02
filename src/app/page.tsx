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

  const filteredJobs = filters.length === 0 ? jobsData : jobsData.filter((job) =>
    filters.every((filter) => job.languages.includes(filter) || job.tools.includes(filter))
  );

  return (
    <div>
      <Header />
      <FilterPanel filters={filters} setFilters={setFilters} />
      <div>
        {filteredJobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
