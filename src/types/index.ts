export type User = {
  username: string;
  avatar: string;
  bio: string;
  followers: number | null;
  following: number | null;
  location: string;
};

export type HeroProps = {
  userInfo: User;
  handleUsername: React.ChangeEventHandler<HTMLInputElement>;
};

export type Repo = {
  id: number;
  name: string;
  description: string;
  license: string;
  forks: number;
  stars: number;
  lastUpdated: string;
};

export type RepoProps = {
  userRepos: Repo[];
};
