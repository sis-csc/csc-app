import { client, urlFor } from "./sanity";

export async function getCarouselImages() {
  return client
    .fetch(`*[_type == "home"][0].carouselImages`)
    .then((carousels) =>
      carousels.map((carousel) => ({
        photo: urlFor(carousel),
      }))
    );
}

export async function getRegisterLink() {
  return client.fetch(`*[_type == "home"][0].registerLink`);
}

export async function getClubDescription() {
  return client.fetch(`*[_type == "home"][0].clubDescription`);
}

export async function getAchievements() {
  return client
    .fetch(`*[_type == "home"][0].achievements`)
    .then((achievements) =>
      achievements.map((achievement) => ({
        ...achievement,

        photo: urlFor(achievement.image),
      }))
    );
}
