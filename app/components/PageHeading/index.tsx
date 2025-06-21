export const PageHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="col-span-full w-full px-5 !text-3xl font-medium tracking-tighter text-neutral-950 md:!text-4xl lg:!text-6xl">
      {children}
    </h1>
  );
};
