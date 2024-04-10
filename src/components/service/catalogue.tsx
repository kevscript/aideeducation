"use client";

import { isImage } from "@/cms/typeguards";
import { Service } from "@/cms/types";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ServiceCatalogueProps = {
  services: Service[];
};

export function ServiceCatalogue({ services }: ServiceCatalogueProps) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const activeService = useMemo(() => {
    return services.find((s) => s.id === activeServiceId);
  }, [activeServiceId, services]);

  function handleActiveService(id: string) {
    if (activeServiceId === id) {
      return;
    }
    setActiveServiceId(id);
  }

  useEffect(() => {
    if (activeServiceId === null && services.length) {
      setActiveServiceId(services[0].id);
    }
  }, [activeServiceId, services]);

  useEffect(() => {
    const interval = setInterval(() => {
      const activeServiceIndex = services.findIndex(
        (s) => s.id === activeServiceId
      );

      if (activeServiceIndex + 1 === services.length) {
        setActiveServiceId(services[0].id);
      } else {
        setActiveServiceId(services[activeServiceIndex + 1].id);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [activeServiceId, services]);

  return (
    <div className="hidden wrapper lg:flex flex-row flex-nowrap w-full justify-between gap-16">
      <div className="flex justify-start items-start max-w-[32rem] w-full flex-col">
        <ul className="flex flex-col w-full flex-1 justify-start">
          {services.length &&
            services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleActiveService(service.id)}
                className="cursor-pointer group flex flex-col pt-8"
              >
                <h5
                  className={`text-2xl font-semibold tracking-tighter ${
                    activeServiceId === service.id && "text-navy-900"
                  }`}
                >
                  {service.title}
                </h5>

                <div
                  className={`pt-0 aria-[hidden=false]:pt-4 grid grid-rows-[0fr] text-neutral-900 transition-all group duration-1000 aria-[hidden=false]:grid-rows-[1fr]`}
                  aria-hidden={!(activeServiceId === service.id)}
                >
                  <p className="whitespace-pre-wrap w-full leading-[1.75] text-neutral-500 overflow-hidden transition-all duration-1000">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-nowrap w-full justify-center items-center mt-8">
                  <div className="relative flex w-full">
                    <div className="w-full h-[1px] bg-neutral-200"></div>
                    <div
                      className={`absolute transition-all ease-linear bg-navy-700 top-0 left-0 h-[1px] ${
                        service.id === activeServiceId
                          ? "w-full duration-[10s]"
                          : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </ul>
      </div>
      <div className="relative z-0 w-full max-w-[32rem] aspect-[3/3.5] overflow-hidden rounded-tr-[2rem]">
        {services.length &&
          services.map((service) => (
            <div
              key={service.id}
              className={`absolute inset-0 -z-20 ${
                service.id === activeServiceId
                  ? "opacity-100 scale-125"
                  : "opacity-0 translate-x-4 scale-110"
              } [transition:transform_11s_linear,opacity_.5s_linear]`}
            >
              {isImage(service.image) && (
                <Image
                  src={service.image.url!}
                  className="object-cover"
                  fill
                  alt={service.image.alt}
                />
              )}
            </div>
          ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-navy-700/20 to-navy-900/40"></div>
      </div>
    </div>
  );
}
