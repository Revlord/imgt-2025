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
      <div id="home">
        <ShootingStarsAndStarsBackgroundDemo/>
      </div>
      <a id="sponsors">
        <Sponsors/>
      </a>
      <a id="speakers">
        <Judges/>
      </a>
      <a id="photos">
        <PhotoCarousel/>
      </a>
      <a id="schedule">
        <Schedule/>
      </a>
      <a id="faq">
        <FAQPage/>
      </a>
    </div>
  );
}
