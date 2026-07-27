import type { Metadata } from "next";
import { Linktree } from "@/components/Linktree";

export const metadata: Metadata = {
  title: "Enlaces | Beauty Nails",
  description: "Instagram, ubicación y WhatsApp de Beauty Nails Quito.",
};

export default function TreePage() {
  return (
    <main className="flex-1">
      <Linktree />
    </main>
  );
}
