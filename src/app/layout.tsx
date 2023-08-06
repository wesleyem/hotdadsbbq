import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Analytics from "@/components/analytics";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hot Dads BBQ | Rocklin, CA",
  description:
    "Award winning BBQ Team, Hot Dads BBQ. Come share an awesome experience with us as we pursue our passion.",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
      />
      <body id="page-top" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
