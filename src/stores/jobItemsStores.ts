import { create } from "zustand";
import { TJobItem } from "../libs/types";
type TJobItemsStores = {
  searchText: string;
  jobItems: Array<TJobItem>;
  jobItemsSliced: Array<TJobItem>;
  isLoading: boolean;
  setJobItems: (jobItems: Array<TJobItem>) => void;
  setSearchText: (searchText: string) => void;
  fetchData: (searchText: string) => Promise<void>;
};
export const jobItemsStores = create<TJobItemsStores>((set, get) => ({
  searchText: "react",
  jobItems: [],
  jobItemsSliced: [],
  isLoading: false,
  setSearchText: (searchText: string) => {
    set(() => ({ searchText }));
  },
  setJobItems: (items: Array<TJobItem>) => {
    set(() => ({
      jobItems: items,
    }));
  },
  fetchData: async (searchText: string) => {
    set(() => ({ isLoading: true }));

    const response = await fetch(
      `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
    );
    const data = await response.json();
    set(() => ({ isLoading: false }));

    set(() => ({ jobItems: data.jobItems }));
    const jobItemsSliced = get().jobItems.slice(0, 7);
    set(() => ({ jobItemsSliced }));
  },
}));
// the below code fragment can be found in:
