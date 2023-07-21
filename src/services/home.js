import { client } from "./sanity";

export async function getCarouselImages() {
  return client.fetch(`*[_type == "home"].carouselImages`);
}
