"use client";

import { motion } from "framer-motion";

interface ImageInterludeProps {
  src: string;
  alt?: string;
  height?: string;
  overlay?: "dark" | "purple" | "none";
}

export function ImageInterlude({
  src,
  alt = "",
  height = "h-[40vh] md:h-[50vh]",
  overlay = "dark",
}: ImageInterludeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`relative w-full ${height} overflow-hidden grain`}
    >
      {/* Image with vignette */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        aria-hidden={!alt}
      />

      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--bg-deep)] to-transparent" />

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-deep)] to-transparent" />

      {/* Side fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-deep)] via-transparent to-[var(--bg-deep)] opacity-60" />

      {/* Color overlay */}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-[var(--bg-deep)]/30" />
      )}
      {overlay === "purple" && (
        <div className="absolute inset-0 bg-violet-950/30 mix-blend-multiply" />
      )}
    </motion.div>
  );
}

export function DavidInterlude() {
  return (
    <ImageInterlude
      src="/imgt26-branding-kit-2/Frame 514.png"
      alt="Statue of David wearing VR headset"
      height="h-[35vh] md:h-[45vh]"
      overlay="dark"
    />
  );
}

export function MonaLisaInterlude() {
  return (
    <ImageInterlude
      src="/imgt26-branding-kit-2/Frame 486.png"
      alt="Mona Lisa wearing VR headset"
      height="h-[50vh] md:h-[60vh]"
      overlay="dark"
    />
  );
}

export function SistineInterlude() {
  return (
    <ImageInterlude
      src="/imgt26-branding-kit-2/Frame 495.png"
      alt="Creation of Adam with IMMERSE GT branding"
      height="h-[30vh] md:h-[40vh]"
      overlay="purple"
    />
  );
}
