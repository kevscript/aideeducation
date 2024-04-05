type PageTitleProps = {
  title: string;
  subtitle: string;
};

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-navy-700 to-navy-900 tracking-tight">
        {title}
      </h1>
      <h3 className="text-2xl lg:text-4xl font-semibold tracking-tighter text-center text-balance lg:text-left lg:text-wrap">
        {subtitle}
      </h3>
    </div>
  );
}
