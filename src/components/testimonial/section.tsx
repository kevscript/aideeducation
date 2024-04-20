import { getTestimonials } from "@/cms/api";
import { TestimonialContent } from "./testimonial-content";

export async function TestimonialSection() {
  const testimonials = await getTestimonials();

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return <TestimonialContent testimonials={testimonials} />;
}
