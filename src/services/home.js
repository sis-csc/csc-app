import { client } from "./sanity";

export async function getCarouselImages() {
  return client.fetch(`*[_type == "home"].carouselImages`);
}

export async function getRegisterLink() {
  return client.fetch(`*[_type == "home"][0].registerLink`);
}

export async function getClubDescription() {
  return client.fetch(`*[_type == "home"][0].clubDescription`);
}

export async function getAchievements() {
  return client.fetch(`*[_type == "home"][0].achievements`);
}