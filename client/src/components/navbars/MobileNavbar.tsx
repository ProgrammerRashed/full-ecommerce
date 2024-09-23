"use client"
import useClientSession from "@/lib/useClientSession";
import MobileNav from "../ui/navigation/MobileNav";





const MobileNavbar =  () => {
  const {loading, session} = useClientSession()

    return (
        <div className="lg:hidden block">
        <div className="fixed z-[9999] overflow-hidden border-border border">
    <MobileNav session={session} />
    </div>
    </div>);
}

export default MobileNavbar