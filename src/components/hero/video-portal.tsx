"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { ExitIcon } from "../icons/exit";

export default function VideoPortal({
  videoStatus,
  handleVideoClose,
}: {
  videoStatus: "open" | "close";
  handleVideoClose: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted
        ? createPortal(
            <div
              className={`${
                videoStatus === "open" ? "flex" : "hidden"
              } fixed z-[100] inset-0 bg-gradient-to-b from-navy-700 to-navy-900 justify-center items-center p-8`}
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
                src={
                  videoStatus === "open"
                    ? "https://www.youtube.com/embed/7bn_3k4FPvI?si=b532rylpv04rD_rb"
                    : undefined
                }
                title="Présentation d'AideEducation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
