import { useState } from "react";
import type { User, Repo } from "./types";
import Hero from "./components/Hero";
import DisplayRepos from "./components/Repo";
import "../src/globals.css";

function App() {
  const [userInfo, setUserInfo] = useState<User>({
    username: "GitHub",
    avatar: "https://avatars.githubusercontent.com/u/9919?v=4",
    bio: "How people build software.",
    followers: 94078,
    following: 0,
    location: "United States of America",
  });

  const [userRepos, setUserRepos] = useState<Repo>({
    name: ".github",
    description: "Community health files for the @GitHub organization",
    license: "MIT",
    forks: 3920,
    stars: 1243,
    lastUpdated: "updated 4 days ago",
  });

  // fetch("https://api.github.com/users/github")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // fetch("https://api.github.com/users/github/repos")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // fetch("https://api.github.com/rate_limit")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <main className="w-full max-w-[1880px] min-h-screen font-fn bg-background">
      <Hero userInfo={userInfo} />
      <DisplayRepos userRepos={userRepos} />
    </main>
  );
}

export default App;
