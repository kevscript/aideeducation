export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gradient-to-r from-navy-900 to-navy-700 pt-24 lg:pt-40 pb-16 border-b-4 border-navy-700">
      {children}
    </div>
  );
}
