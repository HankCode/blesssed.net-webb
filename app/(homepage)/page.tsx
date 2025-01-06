import Hero from "@/app/(homepage)/_sections/hero";
import HomeMainFeatures from "./_sections/main-features";
import BlessedAudioPlayer from "@/components/audio-player";

export default async function Index() {
  return (
    <>
      <Hero />
      <BlessedAudioPlayer />
      <HomeMainFeatures />
    </>
  );
}
