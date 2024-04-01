import { LogoIcon } from "../icons/logo";

export function PartnerMarquee() {
  return (
    <div className="relative z-0 flex overflow-hidden select-none gap-4">
      <div className="absolute top-0 left-0 right-0 bottom-0 from-white via-transparent via-10% to-white z-10 bg-[linear-gradient(90deg,rgba(255,255,255,1)0%,rgba(255,255,255,0)10%,rgba(255,255,255,0)90%,rgba(255,255,255,1)100%)]"></div>
      <ul className="flex-shrink-0 flex justify-around min-w-full gap-4 infinite-scroll">
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
      </ul>
      <ul
        className="flex-shrink-0 flex justify-around min-w-full gap-4 infinite-scroll"
        aria-hidden="true"
      >
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
        <LogoIcon className="w-8 h-8 md:w-16 md:h-16 fill-neutral-200" />
      </ul>
    </div>
  );
}
