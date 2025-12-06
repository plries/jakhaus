import { createClient } from "@/utils/supabase/server";
import { Navbar } from "@/app/components";
import { NAVBAR_ADMIN_CONST } from "./const";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="mb-5 grid w-full grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
      <main
        role="main"
        className="col-span-full mb-5 grid w-full grid-cols-4 gap-5 rounded-b-4xl border-x border-b border-neutral-300 pb-5 md:grid-cols-8 lg:col-span-10 lg:col-start-2 lg:grid-cols-12"
      >
        <Navbar LINKS={NAVBAR_ADMIN_CONST.LINKS} dashboard={true} />
        <div className="col-span-full min-h-24 w-full border-b border-b-neutral-300" />
        {children}
      </main>
    </div>
  );
}
