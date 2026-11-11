import type { RepoProps } from "../types";
import LicenseIcon from "../../resources/Chield_alt.svg";
import ForkIcon from "../../resources/Nesting.svg";
import StarIcon from "../../resources/Star.svg";

function DisplayRepos({ userRepos }: RepoProps) {
  return (
    <section className="w-full max-w-7xl text-fn-gray px-8 pb-8 mx-auto">
      <div className="bg-[linear-gradient(95deg,#111729_3%,#1d1b48_99.61%)] p-5 my-8 rounded-xl">
        <h3 className="text-xl font-semibold text-fn-white">
          {userRepos.name}
        </h3>

        <p className="mt-2 mb-4">{userRepos.description}</p>

        <div className="flex flex-wrap items-center gap-7">
          <div className="flex gap-x-3">
            <span className="repo-info">
              <img src={LicenseIcon} alt="license icon" />
              {userRepos.license}
            </span>

            <span className="repo-info">
              <img src={ForkIcon} alt="fork icon" />
              {userRepos.forks}
            </span>

            <span className="repo-info">
              <img src={StarIcon} alt="star icon" />
              {userRepos.stars}
            </span>
          </div>

          <p className="text-xs">{userRepos.lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}

export default DisplayRepos;
