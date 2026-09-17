import type {Metadata} from "next";
import {Inter, Sora} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme/ThemeProvider";
import {ActiveSectionProvider} from "@/contexts/ActiveSectionContext";
import {SidebarNav} from "@/components/nav/SidebarNav";
import {Footer} from "@/components/ui/Footer";
import {greeting} from "@/lib/content";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const sora = Sora({subsets: ["latin"], variable: "--font-sora"});

export const metadata: Metadata = {
  title: `${greeting.name} — Portfolio`,
  description: greeting.subTitle
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className="snap-y snap-proximity">
      <body
        className={`${inter.variable} ${sora.variable} bg-bg font-sans text-ink antialiased`}
      >
        <ThemeProvider>
          <ActiveSectionProvider>
            <SidebarNav />
            <main className="pb-28 md:pb-0">{children}</main>
            <Footer />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
