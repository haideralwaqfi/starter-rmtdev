import { useEffect } from "react";
import { jobItemsStores } from "../stores/jobItemsStores";

export default function SearchForm() {
  const searchText = jobItemsStores((state) => state.searchText);
  const setSearchText = jobItemsStores((state) => state.setSearchText);

  const fetchData = jobItemsStores((state) => state.fetchData);
  useEffect(() => {
    fetchData("searchText");
  }, [searchText]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
      className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
