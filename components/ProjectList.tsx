const ProjectList = () => {
  return (
    <div
      data-component="Container"
      className="mx-auto w-full px-6 lg:px-10 flex flex-col gap-10 sm:gap-16"
    >
      <div className="flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-mono text-xs/7 font-medium uppercase tracking-widest text-[var(--color-text-secondary)]">
            CAREERS
          </div>
          <h2
            data-component="Subheading"
            className="text-pretty text-[var(--color-text)]"
          >
            Join our team
          </h2>
        </div>
        <div
          data-component="Text"
          className="text-[var(--color-text-secondary)] text-pretty"
        >
          We're building a big future: the platform where developers and agents
          ship software together. Come build it with us.
        </div>
      </div>
      <div>
        <div>
          <ul className="space-y-0 divide-y divide-[var(--color-border)]">
            <li>
              <a
                href="https://job-boards.greenhouse.io/warp/jobs/5828901004"
                target="_blank"
                rel="noopener noreferrer"
                className="group block px-0 py-6 transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-60"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-text)]">
                  Analytics Engineer
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  Remote - New York
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://job-boards.greenhouse.io/warp/jobs/5749183004"
                target="_blank"
                rel="noopener noreferrer"
                className="group block px-0 py-6 transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-60"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-text)]">
                  Forward Deployed Engineer
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  Remote within US and Canada
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://job-boards.greenhouse.io/warp/jobs/5832041004"
                target="_blank"
                rel="noopener noreferrer"
                className="group block px-0 py-6 transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-60"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-text)]">
                  Implementation Engineer
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  Remote - New York
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://job-boards.greenhouse.io/warp/jobs/4324888004"
                target="_blank"
                rel="noopener noreferrer"
                className="group block px-0 py-6 transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-60"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-text)]">
                  Software Engineer
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  Remote - New York - San Francisco
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
