import ContactForm from "@/components/contact/form";
import { PageHeader } from "@/components/page-header";

export default function ContactPage() {
  return (
    <main className="pb-24">
      <PageHeader>
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:w-full lg:items-end gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="up-title-light">Contact</h3>
              <h5 className="title-light">Echangeons par email.</h5>
            </div>

            <div className="flex-1 flex flex-col">
              <p className="text-white leading-[1.75] lg:max-w-[32rem] ">
                Utilisez le formulaire ci-dessous pour toute question, demande
                d&apos;information ou collaboration potentielle. Nous vous
                répondrons dans les plus brefs délais.
              </p>
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="wrapper mt-12 lg:mt-16">
        <ContactForm />
      </div>
    </main>
  );
}
