import axios from 'axios'
import { useState, useEffect } from "react";
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
  
  useEffect(() => {
    const getJobs = async () => {
        try {
            setLoading(true);
            const response = await axios.get(import.meta.env.VITE_JOB_API_URL_COUNT, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'jobboerse-jobsuche'
                }
            });
            setJobs(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };
    getJobs();
}, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="searchBar-width mx-auto">
      <h2 className="text-center p-4 font-bold md:text-xl text-orange-500">
        Number of IT Jobs Throughout Germany
      </h2>
      <div className="flex flex-wrap gap-2 justify-between">
        <p>
          Software Developer:{" "}
          <span className="text-orange-600 font-bold">
            {jobs?.facetten?.beruf?.counts?.['Softwareentwickler/in'] ?? 'N/A'}
          </span>
        </p>
        <p>
          Information Technology:{" "}
          <span className="text-orange-600 font-bold">
            {jobs?.facetten?.beruf?.counts?.['Informatiker/in'] ?? 'N/A'}
          </span>
        </p>
        <p>
          Security:{" "}
          <span className="text-orange-600 font-bold">
            {jobs?.facetten?.beruf?.counts?.['Sicherheitsmitarbeiter/in'] ?? 'N/A'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Jobs;