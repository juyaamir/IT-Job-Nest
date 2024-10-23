import { jobCategories } from "../contents/data";
import germanCities from "../contents/german.json";
import Select from "react-select";
import { useState } from "react";

const SearchServices = () => {
  interface OptionType {
    value: string;
    label: string;
  };
  const cityOptions = germanCities.map((city) => ({
    value: city.name,
    label: city.name
  }));

  const jobOptions = jobCategories.map((job) => ({
    value: job.value,
    label: job.label
  }));

  const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);

  const [selectedJob, setSelectedJob] = useState<OptionType | null>(null);

  const handleCityChange = (option: OptionType | null) => {
    setSelectedCity(option);
  };

  const handleJobChange = (option: OptionType | null) => {
    setSelectedJob(option);
  };

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      padding: "8px 16px", // Equivalent to py-2 px-4
      boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)"
    })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(selectedJob?.label, selectedCity?.label);
  };

  return (
    <div className="bg-green-500 searchBar-width mx-auto p-4 my-8  rounded-md">
      <h1 className="text-2xl font-bold text-center p-4 text-white text-wrap">
        Explore new career opportunities!
      </h1>
      <div className="p-3 border border-green-600 shadow-md bg-white flex gap-4 rounded-md mb-7">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full">
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
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchServices;
