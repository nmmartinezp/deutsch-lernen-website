import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Deutsch lernen",
  description:
    "Hallo Welt!, aprende alemán con los recursos que voy subiendo mientras aprendo. Y si quieres puedes ayudarme a mejorar el proyecto.",
};

export default function Home() {
  return (
    <>
      <section className="h-[50dvh] lg:h-[70dvh] w-full">
        <div className="relative w-full h-full bg-gradient-to-r from-[#0b1117] via-[#0b1117ad] to-[#0b111700]">
          <Image
            src={"/images/Cochem Germany.webp"}
            alt="Cochem Germany"
            width={5000}
            height={2000}
            loading={"eager"}
            className="-z-20 absolute w-full h-full"
          />
          <Image
            src={"/images/phrase.svg"}
            alt="Frase en aleman"
            width={300}
            height={300}
            loading={"eager"}
            className="absolute max-lg:hidden top-1/2 right-0 -translate-x-1/3 -translate-y-2/3 -rotate-20 brightness-95"
          />
          <div className="w-full h-full flex justify-start items-center">
            <div className="max-w-[90dvw] lg:max-w-[60dvw] h-full flex flex-col gap-4 justify-center items-start pl-7 lg:pl-20 text-white">
              <h1 className="flex flex-col font-bold">
                <span className="text-lg lg:text-xl pb-2">HALLO!</span>
                <span className="text-3xl lg:text-6xl">
                  Deutsch <span className="text-[#f6c82c]">Lernen</span>
                </span>
                <span className="text-3xl lg:text-6xl">
                  <span className="text-[#f6c82c]">Aprende</span> Aleman
                </span>
              </h1>
              <p className="max-w-[85dvw] lg:max-w-[35dvw] max-lg:text-xs">
                Hallo Welt!, aprende alemán con los recursos que voy subiendo
                mientras aprendo. Y si quieres puedes ayudarme a mejorar el
                proyecto.
              </p>
              <div className="flex gap-5">
                <Link
                  href={"/lecciones"}
                  className="flex justify-center items-center gap-2 bg-[#f6c82c] hover:bg-[#f6c72cc2] text-black max-lg:text-xs font-semibold rounded-3xl px-4 py-2 lg:py-3"
                >
                  <Eye />
                  <span className="max-lg:hidden">Explora el contenido</span>
                  <span className="lg:hidden">Contenido</span>
                </Link>
                <Link
                  href={"/vocabulario"}
                  className="flex justify-center items-center gap-1 max-lg:text-xs hover:underline"
                >
                  <span className="max-lg:hidden">Aumenta tu Vocabulario</span>
                  <span className="lg:hidden">Vocabulario</span> <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
