import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="border-t border-gray-200">
        <div
          class="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
        >
          <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a
              class="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-blue-700
              md:justify-start
            "
            >
              Atlas
            </a>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Blog</p>
          </div>
          <div class="justify-between w-full mt-4 text-center lg:flex">
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                Tempelte
              </h2>
              <ul class="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="w-full text-start  px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <div className="mb-10 mt-3 flex">
                <div>
                  <div class=" xl:w-56">
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
          </div>
        </div>
        <div class="flex justify-center">
          <p class="text-base text-gray-400">
            All rights reserved by @ company 2021
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
