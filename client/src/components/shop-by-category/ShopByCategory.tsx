import Image from "next/image"
import Link from "next/link"

import accessories from "../../assets/categories/accessories.png"
import laptops from "../../assets/categories/laptops.png"
import watches from "../../assets/categories/watches.png"
import ShopByCatSlider from "./ShopByCatSlider"

const ShopByCategory = () => {
  const categoryItems = [{
    name: "Accessories",
    image: accessories
  }, {
    name: "Laptops",
    image: laptops
  },
  {
    name: "Watches",
    image: watches
  },
  {
    name: "Gadgets",
    image: accessories
  },
  {
    name: "Phones",
    image: accessories
  }]

return (
  <div className="py-20">
    <div className="top-section flex justify-between py-3">

      <h1 className="text-xl font-bold">Shop By Category</h1>
      <Link href="/see-all">See All</Link>
    </div>
    {/* CATEGORIES */}
    <ShopByCatSlider categories={categoryItems } />
  </div>
)
}

export default ShopByCategory
