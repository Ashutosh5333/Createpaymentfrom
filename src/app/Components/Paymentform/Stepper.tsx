import React from "react";

const Stepper = () => {
  return (
    <div className=" sm:px-4 border-red-600">
    
   
      <div className=" border-red-600 p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="h-5 w-5 sm:h-10 sm:w-10 flex items-center justify-center bg-green-500 rounded-full">
              <span className="text-white font-bold">✓</span>
            </div>
            <p className="ml-2 text-[.6rem] sm:text-sm">Shipping</p>
          </div>
          <hr className="border-t border-gray-500 flex-grow mx-2 " />

          <div className="flex items-center">
            <div className="h-5 w-5 sm:h-10 sm:w-10 flex items-center justify-center bg-white border border-gray-500 rounded-full">
              <span>2</span>
            </div>
            <p className="ml-2 text-[.6rem] sm:text-sm">Billing</p>
          </div>
          <hr className="border-t border-gray-500 m-auto flex-grow sm:mx-2 " />
          <div className="flex items-center">
            <div className="h-5 w-5 sm:h-10 sm:w-10 flex items-center justify-center bg-white border border-gray-500 rounded-full">
              <span>3</span>
            </div>
            <p className="ml-2 text-[.6rem] sm:text-sm">Confirmed</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Stepper;
