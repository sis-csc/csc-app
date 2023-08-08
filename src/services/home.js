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

// [
//   {
//     description: "Description",
//     _key: "33e5e07e2273",
//     title: "Title",
//     image: {
//       _type: "image",
//       asset: {
//         _ref: "image-dc9164c1994f4bd5c8fa632ec6a32b4960f2e9e8-3024x3024-png",
//         _type: "reference",
//       },
//     },
//     _type: "achievement",
//   },
//   {
//     image: {
//       _type: "image",
//       asset: {
//         _ref: "image-be3d1929aa4e26ea928523f7c40f9cafaad6af49-400x533-png",
//         _type: "reference",
//       },
//     },
//     _type: "achievement",
//     description: "dafdsfasdfasd",
//     _key: "b1e011921020",
//     title: "Title2",
//   },
// ];
