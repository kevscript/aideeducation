import { TriangleSVG } from "./triangle";

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-0 overflow-hidden relative w-full h-fit bg-gradient-to-t from-navy-900 to-navy-700 pt-24 lg:pt-40 pb-16 border-b-4 border-navy-700">
      {children}
      <div className="w-80 lg:w-1/2 top-0 -left-[25%] aspect-square opacity-20 bg-navy-900 absolute lg:top-0 lg:left-0 -z-20 rounded-full"></div>
      <TriangleSVG
        className="absolute -top-[80%] -left-[10%] lg:top-[10%] lg:-left-[20%] -z-20 stroke-navy-900 rotate-45 w-1/2"
        variant="outline"
      />
      <TriangleSVG
        className="absolute -bottom-[60%] -right-[25%] lg:bottom-[55%] lg:-right-[20%] -z-10 stroke-navy-900 rotate-90 w-1/2"
        variant="outline"
      />

      <TriangleSVG className="absolute bottom-[75%] left-[3%] -z-10 fill-navy-700 w-3 lg:w-8 h-auto rotate-[105deg]" />
      <div className="absolute w-3 lg:w-8 aspect-square rounded-full bg-navy-700 -z-10 right-[4%] lg:top-[40%]"></div>
    </div>
  );
}
