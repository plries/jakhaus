"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { JakhausLogo } from "@/public/icons";
import { LOGIN_CONST } from "./const";
import { Button, Input } from "../components";

export default function AdminLoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/admin");
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col place-items-center justify-center gap-5 p-5">
      <span className="text-neutral-950 opacity-25">
        <JakhausLogo />
      </span>
      <form
        onSubmit={handleLogin}
        className="rounded-3xl border border-neutral-300 bg-neutral-50 p-5 shadow-2xl shadow-neutral-950/10"
      >
        <h1 className="mb-4 text-2xl font-medium md:text-[2rem] lg:text-4xl">
          {LOGIN_CONST.HEADING}
        </h1>

        <div className="grid grid-cols-1 gap-4">
          {error && (
            <p className="rounded-lg border border-red-400/25 bg-red-50 p-2 text-red-400">
              {error}
            </p>
          )}

          <Input
            type="email"
            placeholder={LOGIN_CONST.INPUTS.EMAIL.PLACEHOLDER}
            label={LOGIN_CONST.INPUTS.EMAIL.LABEL}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            required
          />

          <Input
            type="password"
            placeholder={LOGIN_CONST.INPUTS.PASSWORD.PLACEHOLDER}
            label={LOGIN_CONST.INPUTS.PASSWORD.LABEL}
            value={password}
            error={error}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            onClick={() => {}}
            additionalClasses="bg-neutral-950 !text-neutral-50 hover:!bg-neutral-800"
          >
            {LOGIN_CONST.BUTTON.LOGIN}
          </Button>
        </div>
      </form>
    </main>
  );
}
