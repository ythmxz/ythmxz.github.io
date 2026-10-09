import Image from "next/image";
import ythmxz from "/public/ythmxz.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-900 text-white">
      <Image src={ythmxz} alt="ythmxz"></Image>
      <p className="text-xl">work in progress...</p>
    </main>
  );
}
