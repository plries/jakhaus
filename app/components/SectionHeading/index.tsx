export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="col-span-full flex w-full flex-row items-center gap-5 pt-5 pl-5 md:pl-0">
      <h2 className="relative text-2xl font-medium tracking-tighter text-nowrap md:pl-10 md:text-[2rem] md:before:absolute md:before:top-1/2 md:before:left-0 md:before:h-[1px] md:before:w-5 md:before:translate-y-1/2 md:before:bg-neutral-300 lg:text-4xl">
        {children}
      </h2>
      <div className="h-[1px] w-full bg-neutral-300" />
    </div>
  );
};
