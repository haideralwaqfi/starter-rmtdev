import { useJobItems } from "../libs/hooks";
import { TJobItem } from "../libs/types";

import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList() {
  const { isLoading, jobItemsSliced } = useJobItems();

  return (
    <ul className="job-list">
      {isLoading ? (
        <Spinner />
      ) : (
        jobItemsSliced.map((jobItem: TJobItem) => (
          <li key={jobItem.id} className="job-list__item">
            <JobListItem jobItem={jobItem} />
          </li>
        ))
      )}
    </ul>
  );
}

export default JobList;
