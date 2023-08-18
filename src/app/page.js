// www.blog.com = www.blog.com/
// www.blog.com/about

import ClubDescription from "@/components/Home/ClubDescription";
import HomeCarousel from "../components/Home/HomeCarousel";
import JoinButton from "../components/Home/JoinButton";
import Achievements from "../components/Home/Achievements";
import {
  getAchievements,
  getCarouselImages,
  getClubDescription,
  getRegisterLink,
} from "@/services/home";
import { twoWeeks } from "@/utils/revalidateConstants";

// Home Page
// 1. Club Description
// 2. Join button
// 3. Achievements - Image, short description
export const revalidate = twoWeeks;

async function getImages() {
  const res = await getCarouselImages();
  return res;
}

async function getDescription() {
  const res = await getClubDescription();
  return res;
}

async function getAllAchievements() {
  const res = await getAchievements();
  return res;
}

async function getLink() {
  const res = await getRegisterLink();
  return res;
}

export default async function Home() {
  // Initiate both requests in parallel
  const imagesData = getImages();
  const descData = getDescription();
  const achievementsData = getAllAchievements();
  const linkData = getLink();

  // Wait for the promises to resolve
  const [images, description, achievements, link] = await Promise.all([
    imagesData,
    descData,
    achievementsData,
    linkData,
  ]);

  return (
    // flex는 horizontal로 나열
    // flex flex-col은 vertical로 나열
    <section className="flex flex-col items-center justify-center w-full">
      {/* basis-?로 공간을 자동으로 분할 할 수 있음 */}
      <div className="relative w-full flex justify-center ">
        <HomeCarousel images={images} />
      </div>

      <div className="mt-24 pt-96 w-full flex justify-center">
        <ClubDescription description={description} />
        {/* club description component => styling */}
      </div>

      <div className="mt-10 w-full flex justify-centerw-full bg-green-100">
        <Achievements achievements={achievements} />
      </div>

      <div className="mt-5 mb-5 w-full flex justify-center">
        <JoinButton link={link} />
        {/* Link Button => styling  */}
      </div>
    </section>
  );
}
