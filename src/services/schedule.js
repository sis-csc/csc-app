import { client } from "./sanity";

export async function getAllSchedule() {
  return client.fetch(`*[_type == "schedule"]{ month, year, "id":_id, events}
  `);
}
