import Image from "next/image";
import productImage from "../../assets/banner-bg.jpg";
import { getSession } from "@/actions";
import DataTable from "@/components/shared/DataTable";

const MainProfilePage = async () => {
  const productName =
    "FiFine K669B Microphone- USB Studio Condenser Microphone For YouTube Studio";


    const session = await getSession()
    console.log("session:"+session.email)
  return (
    <div className="overflow-x-hidden">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-accent p-5 space-y-4">
          <h1 className="text-xl">Personal Profile</h1>
          <div>
            <p>Md Rashed Ali</p>
            <p>shopping.rashed@gmail.com</p>
          </div>
        </div>
        <div className="bg-accent p-5 space-y-4">
          <h1 className="text-xl">Address</h1>
          <div>
            <p>Md Rashed Ali</p>
            <p>+8801738313337</p>
            {/* ADDRESS */}
            <div>
              <p>Haldibari Hat</p>
              <p>Rangpur - Thakurgaon - Baliadangi</p>
            </div>
          </div>
        </div>
      </div>
      {/* RECENT ORDER */}
      <div className="my-10">
      <h1 className="font-bold text-lg  pb-2">Recent Orders</h1>
        <div className="relative overflow-x-auto">
         <DataTable/>
        </div>
      </div>
    </div>
  );
};

export default MainProfilePage;
