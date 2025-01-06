// components/AudioPlayer.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Chapter {
  id: string;
  title: string;
  audio_url: string;
  chapter_number: number;
}

export default function BlessedAudioPlayer() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const playerRef = useRef<any>(null);

  const AUDIOBOOK_ID = "5a413c84-34e5-4684-991f-b4455c208ffc";

  useEffect(() => {
    async function fetchChapters() {
      const { data: chaptersData, error } = await supabase
        .from("audiobook_chapters")
        .select("*")
        .eq("audiobook_id", AUDIOBOOK_ID)
        .order("chapter_number");

      if (chaptersData) {
        const introChapter: Chapter = {
          id: "intro",
          title: "Introduction",
          audio_url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audiobooks/game-of-life/intro-1.mp3`,
          chapter_number: 0,
        };

        const allChapters = [introChapter, ...chaptersData];
        setChapters(allChapters);
        setCurrentChapter(introChapter);
      }
      setLoading(false);
    }

    fetchChapters();
  }, []);

  useEffect(() => {
    if (shouldAutoPlay && playerRef.current) {
      const playPromise = playerRef.current.audio.current.play();
      if (playPromise) {
        playPromise.catch(() => {});
      }
      setShouldAutoPlay(false);
    }
  }, [currentChapter, shouldAutoPlay]);

  const handleChapterChange = (direction: "next" | "prev") => {
    if (!currentChapter || !chapters.length) return;

    const currentIndex = chapters.findIndex((c) => c.id === currentChapter.id);
    let newIndex: number;

    if (direction === "next" && currentIndex < chapters.length - 1) {
      newIndex = currentIndex + 1;
      setCurrentChapter(chapters[newIndex]);
      setShouldAutoPlay(true);
    } else if (direction === "prev" && currentIndex > 0) {
      newIndex = currentIndex - 1;
      setCurrentChapter(chapters[newIndex]);
      setShouldAutoPlay(true);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!currentChapter) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            The Game of Life and How to Play It
          </h2>
          <p className="text-gray-600 mb-4">By Florence Scovel Shinn</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setCurrentChapter(chapter);
                  setShouldAutoPlay(true);
                }}
                className={`px-4 py-2 rounded-full text-sm ${
                  currentChapter.id === chapter.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {chapter.chapter_number === 0 ? "Intro" : `Chapter ${chapter.chapter_number}`}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{currentChapter.title}</h3>
          </div>

          <AudioPlayer
            ref={playerRef}
            src={currentChapter.audio_url}
            autoPlay={false}
            showSkipControls={true}
            showJumpControls={true}
            onClickNext={() => handleChapterChange("next")}
            onClickPrevious={() => handleChapterChange("prev")}
            onEnded={() => handleChapterChange("next")}
            customProgressBarSection={[RHAP_UI.CURRENT_TIME, RHAP_UI.PROGRESS_BAR]}
            customControlsSection={[
              RHAP_UI.ADDITIONAL_CONTROLS,
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME_CONTROLS,
            ]}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
