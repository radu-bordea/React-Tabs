import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJbs] = useState(true);
  const [currentItem, setCurrentItem] = useState(0)
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
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
       {/* button container */}
       {/* job info */}
       <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
