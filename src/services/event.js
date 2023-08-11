import { client, urlFor } from "./sanity";

export async function getAnnaHouse() {
  return client
    .fetch(
      `*[_type == "event" && name == "Anna's House"]
            { name, description, image, "id":_id, link}`
    )
    .then((events) =>
      events.map((event) => ({
        ...event,

        image: urlFor(event.image),
      }))
    );
}
export async function getInSchool() {
  return client
    .fetch(
      `*[_type == "event" && name == "In School Activities"]
            { name, description, image, "id":_id, link}`
    )
    .then((events) =>
      events.map((event) => ({
        ...event,

        image: urlFor(event.image),
      }))
    );
}
export async function getFundraising() {
  return client
    .fetch(
      `*[_type == "event" && name == "Fundraising"]
            { name, description, image, "id":_id, link}`
    )
    .then((events) =>
      events.map((event) => ({
        ...event,

        image: urlFor(event.image),
      }))
    );
}
