import { LampDemo } from "@/components/ui/lamp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <LampDemo />
    </main>
  );
}
