"use client";

import { useState, useEffect } from "react";
import Hero from "@/app/(homepage)/_sections/hero";
import HomeMainFeatures from "./_sections/main-features";
import BlessedAudioPlayer from "@/components/audio-player";
import HomeAboutText from "./_sections/about-text";

export default function Index() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      {/* Background Images */}
      {isMounted && (
        <div className="fixed inset-0 z-[-1]">
          <img
            src="/img/bg.jpg"
            alt=""
            className="absolute inset-0 object-cover w-full h-full hidden sm:block"
          />
          <img
            src="/img/bg_mobile.jpg"
            alt=""
            className="absolute inset-0 object-cover w-full h-full sm:hidden"
          />
        </div>
      )}

      {/* Content */}
      <Hero />
      <HomeAboutText />
      {/* <BlessedAudioPlayer /> */}

      {/* <HomeMainFeatures /> */}

      {/* Important with Testimonials here */}
    </div>
  );
}
