import ContactForm from "@/components/contact/form";

export default function ContactPage() {
  return (
    <main className="py-24">
      <div className="wrapper flex flex-col gap-2">
        <h1 className="tracking-tight">Contact</h1>
        <h3 className="text-2xl font-semibold tracking-tighter">
          Echangeons par
          <span className="pl-1.5 pr-0.5 bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
            email
          </span>
          .
        </h3>
      </div>
      <div className="wrapper mt-12">
        <ContactForm />
      </div>
    </main>
  );
}
