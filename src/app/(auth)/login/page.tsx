import type { Metadata } from "next";
import { LoginPortalView } from "./LoginPortalView";

export const metadata: Metadata = {
  title: "Your shift. Your workspace. — Eatery Cloud",
  description:
    "Choose your role and we'll take you to the right login page: POS, Franchise, or Admin.",
};

export default function LoginPage() {
  return <LoginPortalView />;
}
