"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBarProvider } from "@shared/context/NavBarProvider";
import NavBar from "@shared/components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-none`}
    >
      <body className="min-h-full flex flex-col">
        <NavBarProvider>
          <header className="lg:sticky lg:h-[12dvh] top-0">
            <NavBar className="lg:px-18 border-b-2 border-b-[#7d8da8]">
              <NavBar.ToggleButton />
              <NavBar.Logo
                src="/images/logo.svg"
                alt="Logo de la pagina deutsch lernen"
                width={350}
                height={350}
              />
              <NavBar.Content>
                <NavBar.Item href="/" className="max-lg:bg-[#f6c82c]/20">
                  Inicio
                </NavBar.Item>
                <NavBar.Item
                  href="/lecciones"
                  className="max-lg:bg-[#f6c82c]/20"
                >
                  Lecciones
                </NavBar.Item>
                <NavBar.Item
                  href="/vocabulario"
                  className="max-lg:bg-[#f6c82c]/20"
                >
                  Vocabulario
                </NavBar.Item>
              </NavBar.Content>
            </NavBar>
          </header>
          <main className="min-h-[70dvh] bg-amber-300">{children}</main>
          <footer className="min-h-[70dvh] bg-amber-800"></footer>
        </NavBarProvider>
      </body>
    </html>
  );
}
