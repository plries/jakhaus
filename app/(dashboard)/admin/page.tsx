"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Navbar } from "@/app/components";
import { NAVBAR_ADMIN_CONST } from "./const";
import { Agents, Listings } from "./components";
import { useTabs } from "./useTabs";

export default function AdminDashboardPage() {
  const hook = useTabs();
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
    <>
      <div className="col-span-full border-b border-b-neutral-300">
        <Navbar
          LINKS={NAVBAR_ADMIN_CONST.LINKS}
          dashboard={false}
          currentTab={hook.currentTab}
          handleTabChange={hook.handleTabChange}
        />
      </div>
      {hook.currentTab === "listings" ? <Listings /> : <Agents />}
    </>
  );
}
