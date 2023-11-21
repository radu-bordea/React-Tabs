import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJbs] = useState(true);
  // current item

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJbs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
       {/* button container */}
       {/* job info */}
       <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
