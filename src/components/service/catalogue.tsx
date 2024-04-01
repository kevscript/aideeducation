"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type ServiceCatalogueProps = {
  services: any[];
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
    <div className="hidden wrapper lg:flex flex-row flex-nowrap w-full gap-16">
      <div className="flex-1">
        <div className="relative z-0 w-full aspect-[3/4] bg-navy-900 rounded-tr-2xl rounded-bl-2xl overflow-hidden">
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
                <Image
                  src={service.imgUrl}
                  className="object-cover"
                  fill
                  alt="service"
                />
              </div>
            ))}
          <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-navy-700/20 to-navy-900/40"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h3 className="tracking-tight text-nacy-900">Nos Services</h3>
          <p className="text-4xl font-semibold tracking-tighter">
            Profitez d&apos;une experience enrichissante.
          </p>
        </div>
        <ul className="flex flex-col">
          {services.length &&
            services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleActiveService(service.id)}
                className="cursor-pointer pt-8 group"
              >
                <div>
                  <h5
                    className={`text-2xl tracking-tight font-semibold group-hover:text-navy-900 ${
                      activeServiceId === service.id && "text-navy-900"
                    }`}
                  >
                    {service.title}
                  </h5>
                </div>
                <div
                  className={`grid grid-rows-[0fr] text-neutral-900 transition-all duration-500 aria-[hidden=false]:grid-rows-[1fr]`}
                  aria-hidden={!(activeServiceId === service.id)}
                >
                  <div className="w-full overflow-hidden pt-4">
                    <p className="whitespace-pre-wrap max-w-[32rem] leading-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex flex-nowrap w-full justify-center items-center">
                    <div className="relative flex flex-1">
                      <div className="w-full h-0.5 bg-neutral-100"></div>
                      <div
                        className={`absolute transition-all ease-linear top-0 left-0 h-0.5 bg-gradient-to-r  ${
                          service.id === activeServiceId
                            ? "w-full from-navy-900 to-navy-500 duration-[10s]"
                            : "w-0 duration-1000"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
