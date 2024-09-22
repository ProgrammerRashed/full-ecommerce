import Image from "next/image";
import productImage from "../../assets/banner-bg.jpg";
import { getSession } from "@/actions";

const MainProfilePage = async () => {
  const productName =
    "FiFine K669B Microphone- USB Studio Condenser Microphone For YouTube Studio";


    const session = await getSession()
    console.log("session:"+session.email)
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
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
          <table className="w-full text-sm text-left ">
            <thead className="text-xs text-gray-700 uppercase bg-muted">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-accent/50">
                <td className="p-4">
                  <Image
                    src={productImage}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover"
                    alt={productName}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {productName}
                </td>
                <td className="px-6 py-4">
                  <p>1</p>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  1020.00৳
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium"
                  >
                    Completed
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainProfilePage;
