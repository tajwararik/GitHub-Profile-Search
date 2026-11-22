import { useEffect } from "react";
import type { Repo, User } from "../types";
import formateLateUpdate from "../utils/formateDate";

const useFetchData = (
  username: string,
  setUserinfo: React.Dispatch<React.SetStateAction<User>>,
  setUserRepos: React.Dispatch<React.SetStateAction<Repo[]>>,
) => {
  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch GitHub user info.");

        return response.json();
      })
      .then((data) => {
        setUserinfo({
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

    return () => {
      controller.abort();
    };
  }, [username]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${username}/repos`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Failed to fetch GitHub user repositories.");

        return response.json();
      })
      .then((data) => {
        const repos: Repo[] = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          license: repo.license?.name,
          forks: repo.forks,
          stars: repo.watchers,
          lastUpdated: formateLateUpdate(repo.updated_at),
        }));

        setUserRepos(repos);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      controller.abort();
    };
  }, [username]);
};

export default useFetchData;
