import { useState, useEffect } from "react";
import type { User, Repo } from "./types";
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

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserInfo({
          username: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          location: data.location,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const repos: Repo[] = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          license: repo.license?.name,
          forks: repo.forks,
          stars: repo.watchers,
          lastUpdated: repo.updated_at,
        }));

        setUserRepos(repos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <main className="w-full max-w-[1880px] min-h-screen font-fn bg-background">
      <Hero userInfo={userInfo} handleUsername={handleUsername} />
      <DisplayRepos userRepos={userRepos} />
    </main>
  );
}

export default App;
