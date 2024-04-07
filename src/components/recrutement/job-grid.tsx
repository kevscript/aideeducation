type JobGridProps = {
  jobs: any[];
};

export function JobGrid({ jobs }: JobGridProps) {
  return (
    <ul className="w-full lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:grid">
      {jobs.length &&
        jobs.map((job, i) => (
          <li
            key={job.id}
            className="card p-8 transition-all hover:rounded-tr-3xl flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col">
              <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
              <h5 className="text-navy-900 text-xl font-semibold tracking-tight mt-8">
                {job.role}
              </h5>
              <p className="text-neutral-500 leading-[1.75] mt-4">
                {job.description}
              </p>
            </div>
            <div className="flex justify-end">
              {job.status === "active" ? (
                <span className="py-1 px-2 text-navy-700 font-semibold tracking-tight uppercase text-sm rounded bg-navy-50">
                  Actif
                </span>
              ) : (
                <span className="py-1 px-2 text-neutral-400 font-semibold tracking-tight uppercase text-sm rounded bg-neutral-100">
                  Inactif
                </span>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
}
