"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Navbar } from "@/app/components";
import { NAVBAR_ADMIN_CONST } from "./const";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState<string | null>();

  useEffect(() => {
    const getCurrentUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!user || error) {
        router.replace("/admin/login");
      } else {
        setEmail(user.email);
      }
    };

    getCurrentUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setEmail(session.user.email);
        } else if (event === "SIGNED_OUT") {
          setEmail(null);
          router.replace("/admin/login");
        }
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <main
      role="main"
      className="mb-5 grid w-full grid-cols-4 gap-5 rounded-b-4xl border-x border-b border-neutral-300 pb-5 md:grid-cols-8 lg:grid-cols-12"
    >
      <Navbar LINKS={NAVBAR_ADMIN_CONST.LINKS} dashboard={true} />
      <div className="col-span-full w-full border-b border-b-neutral-300" />
      {children}
    </main>
  );
}
