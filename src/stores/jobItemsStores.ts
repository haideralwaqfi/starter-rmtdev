import { create } from "zustand";
type TJobItemsStores = {
  searchText: string;
  jobItems: string[];
  setJobItems: (jobItems: string[]) => void;
  setSearchText: (searchText: string) => void;
  fetchData: (searchText: string) => Promise<void>;
};
export const jobItemsStores = create<TJobItemsStores>((set, get) => ({
  searchText: "",
  jobItems: [],
  setSearchText: (searchText: string) => {
    set(() => ({ searchText }));
    console.log(get().searchText);
  },
  setJobItems: (items: string[]) => {
    set(() => ({
      jobItems: items,
    }));
    console.log(get().jobItems);
  },
  fetchData: async (searchText: string) => {
    const response = await fetch(
      `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
    );
    const data = await response.json();
    set(() => ({ jobItems: data.jobItems }));
    console.log(get().jobItems);
  },
}));
// the below code fragment can be found in:
