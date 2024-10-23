import { useState, useEffect } from "react"
import axios from 'axios'



const fetchJobs = (url:string) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getJobs = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url, {
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
  return (
    {
        jobs,
        loading,
        error
    }
  )
}

export default fetchJobs