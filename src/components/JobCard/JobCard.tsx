import { Job } from "../../types/job";
import styles from "./styles/JobCard.module.scss";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className={`${styles.jobCard} ${job.featured ? styles.featured : ""}`}>
      <img src={job.logo} alt={job.company} className={styles.logo} />
      <div className={styles.jobDetails}>
        <div className={styles.jobHeader}>
          <span className={styles.company}>{job.company}</span>
          {job.new && <span className={styles.new}>NEW!</span>}
          {job.featured && <span className={styles.featured}>FEATURED</span>}
        </div>
        <h2 className={styles.position}>{job.position}</h2>
        <div className={styles.jobInfo}>
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>

      </div>
    </div>
  );
};

export default JobCard;
