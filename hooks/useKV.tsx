import { getConfig } from "@/lib/kvConfig";
import useSWR from "swr";

export default async function useKV(configID: string) {
  const { data, error } = useSWR<Config>(configID, getConfig);
  if (!data) {
    throw new Error(`Key ${configID} not found`);
  }

  if (error) {
    console.error(error);
  }

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
