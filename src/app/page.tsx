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
      <a id="home">
        <ShootingStarsAndStarsBackgroundDemo/>
      </a>
      <a id="sponsors">
        <Sponsors/>
      </a>
      <a id="judges">
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
