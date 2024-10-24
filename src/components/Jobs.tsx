import fetchJobs from "../hooks/fetchJobs";

const Jobs = () => {
  const { jobs, loading, error } = fetchJobs('https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs');

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
      <div className="flex gap-2 justify-between">
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