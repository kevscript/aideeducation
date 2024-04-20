"use client";

import { useEffect, useRef, useState } from "react";
import { ExitIcon } from "../icons/exit";
import { PlayIcon } from "../icons/play";
import Image from "next/image";
import VideoPortal from "./video-portal";

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
      <>
        <div
          className="group hover:scale-110 transition duration-500 w-3/4 lg:w-4/5 blobing aspect-square bg-navy-700 rounded-full flex justify-center items-center cursor-pointer"
          onClick={handleVideoOpen}
        >
          <div className="z-0 relative w-[96%] h-[96%] rounded-full flex justify-center items-center bg-navy-900 blobing overflow-hidden">
            <Image
              src={"/presentation.webp"}
              alt="presentation"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full scale-100 w-auto object-cover opacity-40 absolute top-0 right-0 -z-10 group-hover:opacity-50 transition duration-1000"
            />
            <div className="bg-navy-700 w-16 h-16 lg:w-24 lg:h-24 transition group-hover:scale-125 duration-500 rounded-full flex justify-center items-center">
              <PlayIcon className=" fill-white w-6 h-6 lg:w-8 lg:h-8 translate-x-0.5 lg:translate-x-1" />
            </div>
          </div>
        </div>
      </>

      <VideoPortal
        handleVideoClose={handleVideoClose}
        videoStatus={videoStatus}
      />
    </>
  );
}
