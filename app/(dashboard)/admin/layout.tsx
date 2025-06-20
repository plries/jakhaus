export const metadata = {
  title: "Admin | Jakhaus Creative Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full pb-5" role="main">
      {children}
    </main>
  );
}
