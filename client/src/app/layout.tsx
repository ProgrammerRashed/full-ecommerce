"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import ShopFeatures from "@/components/shop-features/ShopFeatures";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import MainNavbar from "@/components/navbar/MainNavbar";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // GETTING CURRENT PATHNAME
  const targetPathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NAVIGATION MENUS */}
        {targetPathname !== "/login" &&
          targetPathname !== "/registration" &&
          targetPathname !== "/forgot-password" && (
            <div>
              <MainNavbar />
            </div>
          )}




        {/* MAIN APP */}
        <div className="min-h-screen flex flex-col">
          <Toaster position="bottom-center" />

          {/* Page Content */}
          <div className="flex-grow">{children}</div>

          {/* FOOTER */}
          {targetPathname !== "/login" &&
            targetPathname !== "/registration" &&
            targetPathname !== "/forgot-password" && (
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
        </div>


      </body>
    </html>
  );
}

