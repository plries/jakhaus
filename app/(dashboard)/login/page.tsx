import { Metadata } from "next";
import { Login } from "./components";

export const metadata: Metadata = {
  title: "Login | Jakhaus Creative Media",
};

export default function AdminLoginPage() {
  return <Login />;
}
