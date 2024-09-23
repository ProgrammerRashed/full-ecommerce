"use client"
import useClientSession from "@/lib/useClientSession";
import DesktopNav from "../ui/navigation/DesktopNav";





const DesktopNavbar = () => {
    const { loading, session } = useClientSession()

    return (
        <div className="hidden lg:block">
            <div className="p-3 rounded">
                <DesktopNav session={session} />
            </div>
        </div>
    );
}

export default DesktopNavbar