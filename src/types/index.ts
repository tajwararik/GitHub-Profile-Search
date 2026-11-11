export type User = {
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
};

export type HeroProps = {
  userInfo: User;
};

export type Repo = {
  name: string;
  description: string;
  license: string;
  forks: number;
  stars: number;
  lastUpdated: string;
};

export type RepoProps = {
  userRepos: Repo;
};
