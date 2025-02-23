import Image from "next/image";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/Hero";
import { Sponsors } from "./components/Sponsors";
import { Judges } from "./components/Judges";
import { PhotoCarousel } from "./components/CarouselPhotos";
import { Schedule } from "./components/Schedule";
import FAQPage from "./components/FAQ";


export default function Home() {
  return (
    <div className="min-h-screen flex-col">
      <ShootingStarsAndStarsBackgroundDemo/>
      <Sponsors/>
      <Judges/>
      <PhotoCarousel/>
      <Schedule/>
      <FAQPage/>
    </div>
  );
}
