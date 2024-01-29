import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
export const metadata: Metadata = {
  title: "ZossGadget | Profile",
  description: "One of the best E-commerce website in bangladesh",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // GETTING CURRENT PATHNAME
  const headersList = headers();
  const headerUrl = headersList.get("x-url") || "";
  const pathName = headerUrl.split("/");
  const targetPathname = pathName[pathName.length - 1];

  return (
   <div className="grid grid-cols-12 gap-5">
    <div className="col-span-3">
        <Link href="/profile/orders">Orders</Link>
        <Link href="/profile/personal-info">Info</Link>
    </div>
    <div className="col-span-9">{children}</div>
   </div>
  );
}
