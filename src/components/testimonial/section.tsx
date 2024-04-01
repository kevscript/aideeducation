import { TestimonialSlider } from "./slider";

export function TestimonialSection() {
  return (
    <section className="w-full relative">
      <div className="w-full bg-gradient-to-br from-navy-700 to-navy-900 py-16 rounded-tr-2xl rounded-bl-2xl gap-8 flex flex-col">
        <div className="wrapper w-full flex flex-col gap-8 text-white">
          <h3 className="font-semibold">Nos Témoignages</h3>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
}
