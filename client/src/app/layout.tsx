"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNav from "@/components/ui/navigation/DesktopNav";
import MobileNav from "@/components/ui/navigation/MobileNav";
import FooterComponent from "@/components/footer/FooterComponent";
import ShopFeatures from "@/components/shop-features/ShopFeatures";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // GETTING CURRENT PATHNAME
  const targetPathname = usePathname()


  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NAVIGATION MENUS */}
        {targetPathname !== "/login" && targetPathname !== "/registration" && targetPathname !== "/forgot-password" && (
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
        )}
        {/* MAIN APP */}
        <div>{children}</div>

        {/* FOOTER */}
        {targetPathname !== "/login" && targetPathname !== "/registration" && targetPathname !=="/forgot-password" && (
          <div>
            {targetPathname !== "/shop" && (
              <div>
                <ShopFeatures />
              </div>
            )}

            <div>
              <FooterComponent />
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
