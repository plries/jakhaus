"use client";
import { JakhausLogo } from "@/public/icons";
import { Button, IconButton, Input } from "@/app/components";
import { LOGIN_CONST } from "../../const";
import { SignInIcon, XIcon } from "@phosphor-icons/react";
import { useLogin } from "./useLogin";

export const Login = () => {
  const hook = useLogin();

  return (
    <main className="flex min-h-screen w-full flex-col place-items-center justify-center gap-5 p-5">
      <form
        onSubmit={hook.handleLogin}
        className="grid w-full max-w-xl grid-cols-1 gap-4 rounded-3xl border border-neutral-300 bg-neutral-50 p-5 shadow-2xl shadow-neutral-950/10"
      >
        <JakhausLogo width={"100%"} />

        <Input
          type="email"
          placeholder={LOGIN_CONST.INPUTS.EMAIL.PLACEHOLDER}
          label={LOGIN_CONST.INPUTS.EMAIL.LABEL}
          value={hook.email}
          onChange={(e) => hook.setEmail(e.target.value)}
          error={hook.error}
          required
        />

        <Input
          type="password"
          placeholder={LOGIN_CONST.INPUTS.PASSWORD.PLACEHOLDER}
          label={LOGIN_CONST.INPUTS.PASSWORD.LABEL}
          value={hook.password}
          error={hook.error}
          onChange={(e) => hook.setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          onClick={() => {}}
          additionalClasses="bg-neutral-950 !text-neutral-50 !border-neutral-900 hover:!bg-neutral-800 mt-4"
        >
          {LOGIN_CONST.BUTTON.LOGIN}
          <SignInIcon weight="bold" />
        </Button>
      </form>
      <div
        className={`fixed mx-auto flex w-[calc(100%-2.5rem)] max-w-xl flex-row items-center justify-between rounded-lg border border-red-500/25 bg-red-50 p-2 text-red-600 shadow-sm transition-all duration-300 ease-in-out ${hook.showError ? "bottom-5 opacity-100" : "bottom-0 opacity-0"}`}
      >
        <p className="ml-2 !text-sm">{hook.error}</p>
        <IconButton
          name={LOGIN_CONST.BUTTON.CLOSE}
          onClick={() => hook.setShowError(false)}
          additionalClasses="bg-transparent !size-10 hover:!bg-neutral-950/10 hover:!text-neutral-950 border-0 !shadow-none !rounded-md"
        >
          <XIcon />
        </IconButton>
      </div>
    </main>
  );
};
