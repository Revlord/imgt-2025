import { ShootingStarsAndStarsBackgroundDemo } from "./components/Hero";
import { Sponsors } from "./components/Sponsors";
import { Judges } from "./components/Judges";
import { PhotoCarousel } from "./components/CarouselPhotos";
import { Schedule } from "./components/Schedule";
import FAQPage from "./components/FAQ";
import { EyesInterlude, CirclesInterlude } from "./components/ImageInterlude";

export default function Home() {
  return (
    <div className="min-h-screen flex-col">
      <div id="home">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      <div id="sponsors">
        <Sponsors />
      </div>

      {/* Visual break — VR headset eyes closeup */}
      <EyesInterlude />

      <div id="speakers">
        <Judges />
      </div>

      <div id="photos">
        <PhotoCarousel />
      </div>

      <div id="schedule">
        <Schedule />
      </div>

      {/* Visual break — Concentric circles */}
      <CirclesInterlude />

      <div id="faq">
        <FAQPage />
      </div>
    </div>
  );
}
