import { useState } from "react";
import type { User, Repo } from "./types";
import useFetchData from "./services/github";
import Hero from "./components/Hero";
import DisplayRepos from "./components/Repo";
import "../src/globals.css";

function App() {
  const [username, setUsername] = useState("github");

  const [userInfo, setUserInfo] = useState<User>({
    username: "",
    avatar: "",
    bio: "",
    followers: null,
    following: null,
    location: "",
  });

  const [userRepos, setUserRepos] = useState<Repo[]>([]);

  useFetchData(username, setUserInfo, setUserRepos);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <main className="w-full font-fn">
      <Hero userInfo={userInfo} handleUsername={handleUsername} />
      <DisplayRepos userRepos={userRepos} />
    </main>
  );
}

export default App;
