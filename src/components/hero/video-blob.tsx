"use client";

import { useEffect, useRef, useState } from "react";
import { ExitIcon } from "../icons/exit";
import { PlayIcon } from "../icons/play";

export function VideoBlob() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStatus, setVideoStatus] = useState<"open" | "close">("close");

  function handleVideoOpen() {
    // remove scrollbar when video open
    document.body.classList.add("overflow-y-hidden");
    document.documentElement.classList.add("overflow-y-hidden");
    setVideoStatus("open");
  }

  function handleVideoClose(e: React.MouseEvent<HTMLElement>) {
    if (e.currentTarget === e.target) {
      document.body.classList.remove("overflow-y-hidden");
      document.documentElement.classList.remove("overflow-y-hidden");
      setVideoStatus("close");
    }
  }

  return (
    <>
      <div
        className="group hover:scale-125 transition duration-500 w-48 lg:w-3/5 aspect-square bg-navy-700 blobing flex justify-center items-center cursor-pointer"
        onClick={handleVideoOpen}
      >
        <PlayIcon className="w-8 h-8 lg:w-12 lg:h-12 fill-white md:fill-navy-900 group-hover:fill-white transition" />
      </div>

      {videoStatus === "open" && (
        <div
          className="fixed z-50 inset-0 bg-gradient-to-b from-navy-700 to-navy-900 flex justify-center items-center p-8"
          onClick={handleVideoClose}
        >
          <div
            className="absolute top-8 right-8 flex justify-center items-center z-[60] cursor-pointer"
            onClick={handleVideoClose}
          >
            <ExitIcon className="w-8 h-8 fill-white pointer-events-none" />
          </div>

          <iframe
            className="w-3/4 aspect-video"
            src="https://www.youtube.com/embed/7bn_3k4FPvI?si=b532rylpv04rD_rb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
}
