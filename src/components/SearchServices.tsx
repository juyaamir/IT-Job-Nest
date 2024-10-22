import { jobCategories } from "../contents/data";
import germanCities from "../contents/german.json";
import Select from 'react-select';
import { useState } from "react";

const SearchServices = () => {

const options = germanCities.map((city) => ({
value: city.name, 
label: city.name
}));

const joOptions = jobCategories.map((job) => ({
    value: job.value,
    label: job.label
}))

const [selectedCity, setSelectedCity] = useState(null);
const [selectedJob, setSelectedJob] = useState(null);
const handleChange = (option: any) => {
setSelectedCity(option);
};

const customStyles = {
option: (provided: any) => ({
...provided,
padding: '8px 16px', // Equivalent to py-2 px-4
boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
}),
}

return (
<div className='bg-green-300 searchBar-width mx-auto p-4 my-8 rounded-md'>
    <h1 className='text-2xl font-bold text-center p-4'>Explore new career opportunities!</h1>
    <div className="p-3 border border-green-600 bg-whi shadow-md bg-white flex gap-4 rounded-md">
{/*         <select name="jobCategory" id="job" className="py-2 px-4  w-1/2 border border-gray-400 shadow-md ">
            {jobCategories.map((job) => (
            <option value={job.value} key={job.value}>{job.label}</option>
            ))}
        </select> */}
        <Select 
        className="w-1/2"
        placeholder = 'Select a job category...'
        options={joOptions}
        value={selectedJob}
        onChange={(option: any) => setSelectedJob(option)} 
        isClearable={true} isSearchable={true} 
        styles={customStyles}
        />
        <Select className="w-1/2" 
        placeholder="Select a city..."
        value={selectedCity} 
        closeMenuOnSelect={true} 
        options={options}
        onChange={handleChange} 
        isClearable={true} isSearchable={true} 
        styles={customStyles} 
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
        </button>
    </div>
</div>
);
};

export default SearchServices;