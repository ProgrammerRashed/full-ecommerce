import MobileNav from "@/components/ui/navigation/MobileNav";

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
