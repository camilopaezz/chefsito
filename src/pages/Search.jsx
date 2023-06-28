import TopBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

function Search() {
  return (
    <div>
      <TopBar back />
      <main className="flex justify-center items-center w-[620px]">
        <SearchBar />
      </main>
    </div>
  );
}

export default Search;
