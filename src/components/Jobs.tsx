import fetchJobs from "../hooks/fetchJobs"
import { Link } from "react-router-dom"
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
const Jobs = () => {
    
    const { jobs, loading, error } = fetchJobs('https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs?angebotsart=1&umkreis=200&arbeitszeit=ho;mj&pav=false');
    console.log(jobs);

    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Error: {error};
        </div>
    }
  return (
    <div className="flex  flex-wrap gap-4 justify-between jobs-width">
        {
            jobs && jobs.stellenangebote ? ( jobs.stellenangebote.map((job:string, index:number) => (
                <div key={index} className="border border-gray-200 h-60 w-96 shadow-md p-2 rounded-md flex flex-col gap-2">
                    
                    <h2 className="font-bold">{job.titel}</h2>
                    <p className="flex items-center gap-2"><MdOutlineMapsHomeWork className="text-2xl" />{job.arbeitgeber}</p>
                    <p className="flex items-center gap-2"><SlLocationPin className="text-2xl" />{job.arbeitsort.ort}, {job.arbeitsort.region}</p>
                    <p className="p-2">
                        Posted: {job.eintrittsdatum}</p>
                    <Link to='https://www.arbeitsagentur.de/jobsuche/' target="_blank" 
                    className="text-center bg-green-500 text-white  flex justify-center items-center rounded-md p-1 hover:bg-green-600 "
                    >
                        More...
                    </Link>

                </div>
            ))
            ) : (
                <div>No jobs found</div>
            )
        }
    </div>
  )
}

export default Jobs