import type { HeroProps } from "../types";
import SearchIcon from "../../resources/Search.svg";

function Hero({ userInfo, handleUsername }: HeroProps) {
  return (
    <>
      <div className="w-full min-h-60 bg-hero md:bg-hero-md bg-no-repeat bg-top bg-cover absolute"></div>

      <section className="w-full max-w-7xl flex flex-col items-center text-fn-white px-8 pt-8 mx-auto mt-0 mb-4 z-10">
        <div className="w-full max-w-95 relative">
          <img
            src={SearchIcon}
            alt="search icon"
            className="size-5 absolute top-2/4 -translate-y-1/2 left-2"
          />
          <input
            type="text"
            className="w-full text-xs font-semibold text-fn-white placeholder:text-fn-white bg-background py-3 pl-9 mb-2 rounded-lg outline-0"
            placeholder="username"
            onChange={handleUsername}
          />

          <div className="w-full absolute bg-userInfo-bg rounded-lg z-20">
            <div className="flex items-center gap-3 p-2">
              <div className="size-15 rounded-lg">
                <img
                  src={userInfo.avatar}
                  alt="user avatar"
                  className="display-image"
                />
              </div>

              <div className="flex flex-col justify-center gap-y-1">
                <p className="">{userInfo.username}</p>
                <p className="text-[10px] text-fn-gray">{userInfo.bio}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8 md:flex-row mt-32 z-10">
          <div className="size-25 bg-background p-1.5 rounded-xl">
            <img
              src={userInfo.avatar}
              alt="user avatar"
              className="display-image"
            />
          </div>

          <div className="flex flex-col items-start gap-y-5 md:flex-row md:items-end md:gap-x-5 text-xs font-medium">
            <p className="info">
              Followers <span className="separator"> | </span>
              {userInfo.followers}
            </p>
            <p className="info">
              Following <span className="separator"> | </span>
              {userInfo.following}
            </p>
            <p className="info">
              Location <span className="separator"> | </span>
              {userInfo.location}
            </p>
          </div>
        </div>

        <div className="w-full mt-7">
          <h1 className="text-3xl mb-1.5">{userInfo.username}</h1>
          <p>{userInfo.bio}</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
