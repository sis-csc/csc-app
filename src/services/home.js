import { client } from "./sanity";

export async function getCarouselImages() {
  return client.fetch(`*[_type == "home"].carouselImages`);
}

export async function getRegisterLink() {
  return client.fetch(`*[_type == "home"][0].registerLink`);
}
