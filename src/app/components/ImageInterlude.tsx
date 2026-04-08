"use client";

import Image from "next/image";
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
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
        aria-hidden={!alt}
      />

      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--bg-deep)] to-transparent" />

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-deep)] to-transparent" />

      {/* Side fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-deep)] via-transparent to-[var(--bg-deep)] opacity-60" />

      {overlay === "dark" && (
        <div className="absolute inset-0 bg-[var(--bg-deep)]/30" />
      )}
      {overlay === "purple" && (
        <div className="absolute inset-0 bg-violet-950/30 mix-blend-multiply" />
      )}
    </motion.div>
  );
}

export function EyesInterlude() {
  return (
    <ImageInterlude
      src="/brand_kit/ImmerseGT Eyes.webp"
      alt="VR headset eyes closeup"
      height="h-[30vh] md:h-[40vh]"
      overlay="dark"
    />
  );
}

export function CirclesInterlude() {
  return (
    <ImageInterlude
      src="/brand_kit/ImmerseGT Circles.webp"
      alt="ImmerseGT concentric circles"
      height="h-[30vh] md:h-[40vh]"
      overlay="purple"
    />
  );
}
