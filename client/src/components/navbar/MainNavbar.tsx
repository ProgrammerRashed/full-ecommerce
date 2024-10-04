"use client"
import useClientSession from "@/lib/useClientSession";
import MainNavbarComponent from "../ui/navigation/MainNavbarComponent";





const MainNavbar = () => {
    const { loading, session } = useClientSession()

    return (
        <div className="block shadow-lg py-5">
            <div className="p-3 rounded">
                <MainNavbarComponent session={session} />
            </div>
        </div>
    );
}

export default MainNavbar