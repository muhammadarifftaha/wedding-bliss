import { kv } from "@vercel/kv";
import { configType } from "@/types";
import { mutate } from "swr";

export function getConfig(configID: string): Config | undefined {
  try {
    const result = await kv.get(key);
    return result.json();
  } catch (error) {
    console.error(error);
  }
}

export async function setConfig(configID: string, newConfig: Config) {
  try {
    await kv.put(configID, JSON.stringify(newConfig));
  } catch (error) {
    console.error("Error updating config:", error);
  } finally {
    mutate(configID);
  }
}

// export async function setConfig(configID, config: configType) {
//   try {
//     await kv.set(configID, config);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     mutate(configID);
//   }
// }
