import { Button } from "../ui/button";

const CareerComponent = () => {
  const isJobAvailable = false
  
  return (
    <div>
      <div className="bg-accent flex flex-col justify-center items-center p-10">
        <h1 className="text-2xl">Job&apos;s at ZossGadget</h1>
        <div className="flex justify-center items-center gap-3 mt-6">
          <input type="text" className="w-full h-10 rounded" />
          <Button>Search</Button>
        </div>
      </div>
      {/* Job Card */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 p-20">
        {
          isJobAvailable ? <div className="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
          <div>
            <span className="text-purple-800 text-sm">Engineering</span>
            <h3 className="font-bold mt-px">
              Senior Full Stack Backend Engineer
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                Full-time
              </span>
              <span className="text-slate-600 text-sm flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Remote, UK
              </span>
            </div>
          </div>
          <div>
            <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
              Apply Now
            </button>
          </div>
        </div> : <div className="w-full h-full flex justify-center items-center">
          <h1>Sorry! No Jobs Available for Now!! </h1>
          <p>Keep eye on social media profiles!!</p>
        </div>
        }
      </div>
    </div>
  );
};

export default CareerComponent;
