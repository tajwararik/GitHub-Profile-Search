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
