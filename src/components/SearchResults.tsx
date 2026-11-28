import type { SearchUser } from "../types";

function SearchResults({
  searchResults,
  handleGetUser,
}: {
  searchResults: SearchUser[];
  handleGetUser: (username: string) => void;
}) {
  return searchResults.map((result: SearchUser) => (
    <div
      key={result.id}
      className="flex gap-3 p-2 cursor-pointer"
      onClick={() => handleGetUser(result.username)}
    >
      <div className="size-15 rounded-lg">
        <img src={result.avatar} alt="user avatar" className="display-image" />
      </div>

      <p className="mt-2">{result.username}</p>
    </div>
  ));
}

export default SearchResults;
