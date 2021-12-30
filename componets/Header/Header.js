import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around ">
        <div>
          <h1 className="text-blue-500">WelCome To my Blog</h1>
          <h1 className=" text-5xl font-bold">We all owe death a life</h1>
          <p className="text-blue-500">
            Here is a place that i share my writings about design and
            photography.Read,write and discuss with me
          </p>
          <div className="mb-10 mt-3 flex">
            <div  >
              <div class=" xl:w-96">
                <input
                  type="text"
                  class="
        form-control
       
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                />
              </div>
            </div>
            <span>
              <button className="w-20 h-10 bg-indigo-500  p-1    ml-3  cursor-pointer  text-center ">
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <div>
           <img src="/profile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
