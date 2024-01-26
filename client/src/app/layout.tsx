import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNav from "@/components/ui/navigation/DesktopNav";
import MobileNav from "@/components/ui/navigation/MobileNav";
import FooterComponent from "@/components/footer/FooterComponent";
import ShopFeatures from "@/components/shop-features/ShopFeatures";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZossGadget",
  description: "One of the best E-commerce website in bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/* MOBILE NAV */}
          <div className="fixed border lg:hidden bottom-0 w-full overflow-hidden border-border">
            <MobileNav />
          </div>
          {/* DESKTOP NAV */}
          <div className="hidden lg:block">
            <div className="p-3 rounded">
              <DesktopNav />
            </div>
          </div>
        </div>
        {/* MAIN APP */}
        <div>{children}</div>

        {/* FOOTER */}
        <div>
          <ShopFeatures />
        </div>
        {/* FOOTER */}
        <div>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
