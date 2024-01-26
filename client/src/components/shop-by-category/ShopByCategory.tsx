import Image from "next/image"
import Link from "next/link"
import categoryImage from "../../assets/categories/ipads.png"
import accessories from "../../assets/categories/accessories.png"
import laptops from "../../assets/categories/laptops.png"
import watches from "../../assets/categories/watches.png"

const ShopByCategory = () => {
  return (
    <div className="py-20">
      <div className="top-section flex justify-between py-3">

        <h1 className="text-xl font-bold">Shop By Category</h1>
        <Link href="/see-all">See All</Link>
      </div>
      {/* CATEGORIES */}
      <div className="grid grid-cols-4 gap-5">
        <div className="card bg-muted p-5">
            <div className="p-3 h-28 w-28 mx-auto">
            <Image width={100} height={100} src={categoryImage} alt="category-image" className="h-full w-full object-contain" />
            </div>
            <div className="bg-white text-black p-3 rounded flex justify-center items-center">Ipads</div>
        </div>
        <div className="card bg-muted p-5">
            <div className="p-3 h-28 w-28  mx-auto">
            <Image width={100} height={100} src={accessories} alt="category-image" className="h-full w-full object-contain"/>
            </div>
            <div className="bg-white text-black p-3 rounded flex justify-center items-center">Accessories</div>
        </div>
        <div className="card bg-muted p-5">
            <div className="p-3 h-28 w-28  mx-auto">
            <Image width={100} height={100} src={laptops} alt="category-image" className="h-full w-full object-contain"/>
            </div>
            <div className="bg-white text-black p-3 rounded flex justify-center items-center">Laptops</div>
        </div>
        <div className="card bg-muted p-5">
            <div className="p-3 h-28 w-28  mx-auto">
            <Image width={100} height={100} src={watches} alt="category-image" className="h-full w-full object-contain"/>
            </div>
            <div className="bg-white text-black p-3 rounded flex justify-center items-center">Watches</div>
        </div>
      </div>
    </div>
  )
}

export default ShopByCategory
