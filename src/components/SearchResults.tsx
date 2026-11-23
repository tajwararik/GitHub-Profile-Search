function SearchResults({
  username,
  avatar,
  bio,
}: {
  username: string;
  avatar: string;
  bio: string;
}) {
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="size-15 rounded-lg">
        <img src={avatar} alt="user avatar" className="display-image" />
      </div>

      <div className="flex flex-col justify-center gap-y-1">
        <p className="">{username}</p>
        <p className="text-[10px] text-fn-gray">{bio}</p>
      </div>
    </div>
  );
}

export default SearchResults;
