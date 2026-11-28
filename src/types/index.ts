export type SearchResults = {
  id?: number;
  username: string;
  avatar: string;
  url?: string;
};

export interface User extends SearchResults {
  bio: string;
  followers: number | null;
  following: number | null;
  location: string;
}

export type HeroProps = {
  userInfo: User;
  searchUser: string;
  searchResults: SearchResults[];
  handleSearchUser: React.ChangeEventHandler<HTMLInputElement>;
  handleGetUser: (username: string) => void;
};

export type Repo = {
  id: number;
  name: string;
  url: string;
  description: string;
  license: string;
  forks: number;
  stars: number;
  lastUpdated: string;
};

export type RepoProps = {
  userRepos: Repo[];
};
