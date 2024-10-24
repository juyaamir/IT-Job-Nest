import { jobCategories } from "../contents/data";
import germanCities from "../contents/german.json";
import Select from "react-select";
import { useState } from "react";
import daysDifference from "../utils/daysDifference";
import { Link } from "react-router-dom";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import axios from "axios";
import { SlCalender } from "react-icons/sl";

const SearchServices = () => {
  interface OptionType {
    value: string;
    label: string;
  }

  const cityOptions = germanCities.map((city) => ({
    value: city.name,
    label: city.name,
  }));

  const jobOptions = jobCategories.map((job) => ({
    value: job.value,
    label: job.label,
  }));

  const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);
  const [selectedJob, setSelectedJob] = useState<OptionType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  interface JobType {
    titel: string;
    arbeitgeber: string;
    arbeitsort: {
      ort: string;
      region: string;
    };
    eintrittsdatum: string;
  }

  const [jobs, setJobs] = useState<JobType[]>([]);

  const handleCityChange = (option: OptionType | null) => {
    setSelectedCity(option);
  };

  const handleJobChange = (option: OptionType | null) => {
    setSelectedJob(option);
  };

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      padding: "8px 16px",
    }),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.get(
        `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs?berufsfeld=${selectedJob?.value}&wo=${selectedCity?.value}&umkreis=200&arbeitszeit=ho;mj&page=1&size=25&pav=false`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": "jobboerse-jobsuche",
          },
        }
      );
      setJobs(response.data.stellenangebote);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="bg-green-500 searchBar-width mx-auto p-4 my-8 rounded-md">
        <h1 className="text-2xl font-bold text-center p-4 text-white text-wrap">
          Explore new career opportunities!
        </h1>
        <div className="p-3 border border-green-600 shadow-md bg-white flex gap-4 rounded-md mb-6">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full ">
            <Select
              className="w-full md:w-1/2"
              placeholder="Select a job category..."
              options={jobOptions}
              value={selectedJob}
              onChange={handleJobChange}
              isClearable={true}
              isSearchable={true}
              styles={customStyles}
            />
            <Select
              className="w-full md:w-1/2"
              placeholder="Select a city..."
              value={selectedCity}
              closeMenuOnSelect={true}
              options={cityOptions}
              onChange={handleCityChange}
              isClearable={true}
              isSearchable={true}
              styles={customStyles}
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between jobs-width">
        {jobs.length > 0 ? (
          jobs.map((job: JobType, index: number) => {
            const daysAgo = daysDifference(job.eintrittsdatum);
            return (
              <div
                key={index}
                className="border border-gray-200 h-52 w-96 shadow-md p-2 rounded-md flex flex-col gap-2"
              >
                <h2 className="font-bold">{job.titel}</h2>
                <p className="flex items-center gap-2">
                  <MdOutlineMapsHomeWork className="text-2xl" />
                  {job.arbeitgeber}
                </p>
                <p className="flex items-center gap-2">
                  <GrLocation className="text-2xl" />
                  {job.arbeitsort.ort}, {job.arbeitsort.region}
                </p>
                <p className="flex items-center gap-2" ><SlCalender className="text-2xl" />
                  {daysAgo === 0 ? 'Today': `${daysAgo} days ago`  }
                </p>
                <Link
                  to="https://www.arbeitsagentur.de/jobsuche/"
                  target="_blank"
                  className="text-center bg-green-500 text-white flex justify-center items-center rounded-md p-1 hover:bg-green-600"
                >
                  More...
                </Link>
              </div>
            );
          })
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default SearchServices;