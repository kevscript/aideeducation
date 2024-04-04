export default function PartnerPage() {
  return (
    <main className="py-24">
      <div className="wrapper flex flex-col gap-2">
        <h1 className="tracking-tight">Partenaires</h1>
        <h3 className="text-2xl font-semibold tracking-tighter">
          Ils nous font
          <span className="pl-1.5 pr-0.5 bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900">
            confiance
          </span>
          .
        </h3>
      </div>

      <div className="wrapper mt-12">
        <ul className="grid grid-col-1 gap-4">
          {Array.from({ length: 4 }).map((x, i) => (
            <li
              key={i}
              className="w-full bg-gradient-to-br from-white to-neutral-50 p-8 flex flex-col gap-8 rounded-tr-2xl rounded-bl-2xl border border-neutral-100"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100"></div>

              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-semibold tracking-tighter text-navy-900">
                  Google
                </h5>
                <div className="flex flex-col gap-2">
                  <p>
                    Site dédié à l&apos;orientation, avec renseignements sur les
                    formations, filières, etc. ainsi que des articles et
                    conseils au sujet de l&apos;orientation, mais surtout, qui
                    recense les prochains salons de l&apos;orientation qui se
                    dérouleront partout en France.
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-4">
                <a className="py-2 px-4 bg-navy-50 flex justify-center items-center rounded">
                  <span className="text-navy-700 text-sm tracking-tight">
                    Site Internet
                  </span>
                </a>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
