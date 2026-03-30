import { ShootingStarsAndStarsBackgroundDemo } from "./components/Hero";
import { Sponsors } from "./components/Sponsors";
import { Judges } from "./components/Judges";
import { PhotoCarousel } from "./components/CarouselPhotos";
import { Schedule } from "./components/Schedule";
import FAQPage from "./components/FAQ";
import {
  DavidInterlude,
  SistineInterlude,
} from "./components/ImageInterlude";

export default function Home() {
  return (
    <div className="min-h-screen flex-col">
      <div id="home">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      <div id="sponsors">
        <Sponsors />
      </div>

      {/* Visual break — David with VR headset */}
      <DavidInterlude />

      <div id="speakers">
        <Judges />
      </div>

      <div id="photos">
        <PhotoCarousel />
      </div>

      <div id="schedule">
        <Schedule />
      </div>

      {/* Visual break — Sistine Chapel wide banner */}
      <SistineInterlude />

      <div id="faq">
        <FAQPage />
      </div>
    </div>
  );
}
