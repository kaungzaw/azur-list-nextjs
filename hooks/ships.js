import useSWR from "swr";

export const useGetAllShips = () => {
  const { data, error } = useSWR("/ships");

  return {
    ships: data,
    loading: !error && !data,
    error,
  };
};
