"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PlayIcon } from "../icons/play";
import Image from "next/image";

type VideoBlobProps = {
  handleVideoOpen: () => void;
};

export function VideoBlob({ handleVideoOpen }: VideoBlobProps) {
  const { contextSafe } = useGSAP();

  const onBlobEnter = contextSafe(() => {
    gsap.to(".hero-blob", { scale: 1.25 });
  });
  const onBlobLeave = contextSafe(() => {
    gsap.to(".hero-blob", { scale: 1 });
  });

  useGSAP(() => {
    gsap.from(".hero-blob", {
      scale: 0,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.from(".hero-blob-inner", {
      delay: 0.6,
      duration: 2,
      ease: "power2.inOut",
      opacity: 0,
    });
  });

  return (
    <div
      onMouseEnter={onBlobEnter}
      onMouseLeave={onBlobLeave}
      className="hero-blob group hover:scale-110 w-3/4 blobing lg:w-4/5 aspect-square bg-navy-700 rounded-full flex justify-center items-center cursor-pointer overflow-hidden"
      onClick={handleVideoOpen}
    >
      <div className="hero-blob-inner z-0 relative w-[96%] h-[96%] rounded-full flex justify-center items-center bg-navy-900 blobing overflow-hidden">
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
  );
}
