import { PaginationComponent } from "@/components/shared/PaginationComponent";
import ProductsPage from "@/components/shop/ProductsPage";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import getJsonData from "@/lib/getJsonData";

const AllProductShop = () => {
  const data = getJsonData();

  return (
    <div className="grid grid-cols-12 max-w-[1240px] mx-auto px-2 md:px-3 lg:px-5">
      <div className="sidebar col-span-3 pb-10">
        {/* FILTER BY PRODUCT CATEGORY */}
        <div className="filter-by-cat">
          <h3 className="font-bold mb-2">Product Category</h3>
          <div className="categories space-y-2">
            {data.map((product, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox id={product.category} />
                <label
                  htmlFor={product.category}
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {product.category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* FILTER BY PRODUCT BRANDS */}
        <div className="filter-by-brands mt-5">
          <h3 className="font-bold mb-2">Brands</h3>
          <div className="brand space-y-2">
            {data.map((product, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox id={product.brand} />
                <label
                  htmlFor={product.brand}
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {product.brand}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* SORT BY DATE */}
        <div className="sort-by-date mt-5">
          <h3 className="font-bold mb-2">Sort By</h3>
          <div className="dates">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <label htmlFor="high">Price High to Low</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <label htmlFor="low">Price Low to High</label>
              </div>
            </RadioGroup>
          </div>
        </div>
        {/* SPECIAL SORT */}
        <div className="sort-by-date mt-5">
          <h3 className="font-bold mb-2">View</h3>
          <div className="dates">
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dealOfTheDay" id="dealOfTheDay" />
                <label htmlFor="dealOfTheDay">Deals of the Day</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dealOfTheMonth" id="dealOfTheMonth" />
                <label htmlFor="dealOfTheMonth">Deal of the Month</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bestSelling" id="bestSelling" />
                <label htmlFor="bestSelling">Best Selling</label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="products col-span-9">
        <h4 className="font-bold mb-3">Showing 1 - 10 of 15 Products</h4>
        <div>
          <ProductsPage data={data}/>
        </div>
        <div className="my-10 w-full mx-auto">
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default AllProductShop;
