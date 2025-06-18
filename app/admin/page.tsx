"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-2">Logged in as {email}</p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 px-4 py-2 text-white"
      >
        Logout
      </button>
    </main>
  );
}
