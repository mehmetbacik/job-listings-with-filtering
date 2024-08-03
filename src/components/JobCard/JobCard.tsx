import Image from 'next/image';
import { Job } from "../../types/job";
import styles from "./styles/JobCard.module.scss";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className={`${styles.jobCard} ${job.featured ? styles.featured : ""}`}>
      <Image
        src={job.logo}
        alt={`${job.company} logo`}
        width={50}
        height={50}
        className={styles.logo}
      />
      <div className={styles.jobDetails}>
        <div className={styles.jobHeader}>
          <span className={styles.company}>{job.company}</span>
          {job.new && <span className={styles.new}>NEW!</span>}
          {job.featured && <span className={styles.featured}>FEATURED</span>}
        </div>
        <div className={styles.position}>{job.position}</div>
        <div className={styles.jobInfo}>
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
        <div className={styles.tags}>
          {[...job.languages, ...job.tools].map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
