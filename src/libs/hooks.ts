import { useEffect } from "react";
import { jobItemsStores } from "../stores/jobItemsStores";

export function useJobItems() {
  const isLoading = jobItemsStores((state) => state.isLoading);
  const searchText = jobItemsStores((state) => state.searchText);
  const setSearchText = jobItemsStores((state) => state.setSearchText);
  const jobItemsSliced = jobItemsStores((state) => state.jobItemsSliced);
  const fetchData = jobItemsStores((state) => state.fetchData);
  useEffect(() => {
    fetchData(searchText);
  }, [searchText]);

  return {
    searchText,
    setSearchText,
    jobItemsSliced,
    isLoading,
  };
}
