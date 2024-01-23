import MobileNav from "@/components/ui/navigation/MobileNav";
import { ProfileDropdownMenu } from "@/components/ui/navigation/ProfileDropdown";

export default function Home() {
  return (
    <main className="website min-h-screen">
      {/* Navbar */}
      <div className="fixed bottom-0 w-full">
        <MobileNav />
      </div>
    </main>
  );
}
