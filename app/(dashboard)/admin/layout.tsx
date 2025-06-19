export const metadata = {
  title: "Admin | Jakhaus Creative Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid w-full grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-full grid grid-cols-4 gap-5 border-x border-x-neutral-300 pt-5 pb-10 md:grid-cols-8 lg:col-span-10 lg:col-start-2 lg:grid-cols-10">
        {children}
      </div>
    </main>
  );
}
