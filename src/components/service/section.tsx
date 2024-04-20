import { getServices } from "@/cms/api";
import { ServiceCatalogue } from "./catalogue";
import { ServiceSlider } from "./slider";
import { ServiceContent } from "./service-content";

export async function ServiceSection() {
  const services = await getServices();

  if (!services || services.length === 0) {
    return null;
  }

  return <ServiceContent services={services} />;
}
