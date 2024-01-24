import MobileNav from "@/components/ui/navigation/MobileNav";

export default function Home() {
  return (
    <main className="website min-h-screen">
      {/* Navbar */}
      <div className="fixed border lg:w-1/2 lg:translate-x-1/2 lg:bottom-4 lg:shadow-md lg:rounded-md bottom-0 w-full overflow-hidden border-border">
        <MobileNav />
      </div>
    </main>
  );
}
