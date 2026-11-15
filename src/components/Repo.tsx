import type { RepoProps, Repo } from "../types";
import LicenseIcon from "../../resources/Chield_alt.svg";
import ForkIcon from "../../resources/Nesting.svg";
import StarIcon from "../../resources/Star.svg";

function DisplayRepos({ userRepos }: RepoProps) {
  return (
    <section className="w-full max-w-7xl text-fn-gray px-8 pb-8 mx-auto md:grid grid-cols-2 gap-8">
      {userRepos.map((repo: Repo) => (
        <div
          key={repo.id}
          className="bg-[linear-gradient(95deg,#111729_3%,#1d1b48_99.61%)] p-5 my-8 rounded-xl"
        >
          <a href={repo.url} target="_blank">
            <div>
              <h3 className="text-xl font-semibold text-fn-white">
                {repo.name}
              </h3>

              <p className="mt-2 mb-4">{repo.description}</p>

              <div className="flex flex-wrap items-center gap-7">
                <div className="flex flex-wrap gap-x-3">
                  {repo.license && (
                    <span className="repo-info">
                      <img src={LicenseIcon} alt="license icon" />
                      {repo.license}
                    </span>
                  )}

                  <span className="repo-info">
                    <img src={ForkIcon} alt="fork icon" />
                    {repo.forks}
                  </span>

                  <span className="repo-info">
                    <img src={StarIcon} alt="star icon" />
                    {repo.stars}
                  </span>
                </div>

                <p className="text-xs">{repo.lastUpdated}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}

export default DisplayRepos;
