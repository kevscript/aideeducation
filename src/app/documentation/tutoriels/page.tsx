import { PageTitle } from "@/components/page-title";

export default function TutorielPage() {
  return (
    <main className="pb-24">
      <div className="w-full bg-gradient-to-r from-navy-900 to-navy-700 pt-24 lg:pt-40 lg:pb-16 border-b-4 border-navy-700">
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap lg:justify-between w-full lg:items-end gap-8 lg:gap-4">
            <div className="flex flex-col gap-4 flex-1 w-full">
              <h3 className="up-title-light">Tutoriels</h3>
              <h5 className="title-light text-balance max-w-[32rem]">
                Nous vous facilitons les démarches
              </h5>
            </div>

            {/* <div className="max-w-[32rem] w-full flex flex-col">
              <p className="text-white leading-[1.75] ">
                Explorez notre séléction de ressources pour vous accompagner
                dans votre orientation scolaire et prendre des décisions
                éclairées sur votre avenir académique.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
