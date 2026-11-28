import { useState } from "react";
import type { User, Repo, SearchResults } from "./types";
import { showSearchResults, useFetchData } from "./services/github";
import Hero from "./components/Hero";
import DisplayRepos from "./components/Repo";
import "./globals.css";

function App() {
  const [username, setUsername] = useState("github");

  const [searchUser, setSearchUser] = useState("");

  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);

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

  showSearchResults(searchUser, setSearchResults);

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setUsername("github");

    setSearchUser(e.target.value);
  };

  const handleGetUser = (username: string) => {
    setUsername(username);
    setSearchUser("");
  };

  return (
    <main className="w-full font-fn">
      <Hero
        userInfo={userInfo}
        searchUser={searchUser}
        handleSearchUser={handleSearchUser}
        searchResults={searchResults}
        handleGetUser={handleGetUser}
      />
      <DisplayRepos userRepos={userRepos} />
    </main>
  );
}

export default App;
