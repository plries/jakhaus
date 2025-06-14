export const SectionHeading = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="col-span-full flex flex-row items-center gap-5 pt-5 pl-5 md:pl-0">
      <div className="hidden h-[1px] w-5 bg-neutral-300 md:block" />
      <h2 className="text-2xl font-medium tracking-tighter text-nowrap md:text-[2rem] lg:text-4xl">
        {children}
      </h2>
      <div className="h-[1px] w-full bg-neutral-300" />
    </div>
  );
};
