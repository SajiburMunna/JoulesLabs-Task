import Link from "next/link";
import useDarkMode from "./../hook/useDarkMode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../pages/redux/action";
 cartAction

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
   const Data = useSelector((state) => state.Alldata);
   const cartno = Data.cartData;
    
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-lg">
        <div class="flex items-center flex-shrink-0  mr-6">
          <span class="font-semibold text-xl tracking-tight">
            JoulesLabs Test
          </span>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link href="/">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl   mr-4">
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl   mr-4">
                Blog
              </a>
            </Link>
            <Link href="/shop">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  text-xl">
                Shop
              </a>
            </Link>
          </div>
          <div>
            <span className="w-20 h-20 bg-indigo-500 rounded-full p-2    mr-5   cursor-pointer  text-center ">
              <svg
                className="w-6 h-6  inline-block "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span>{`${cartno.length}`}</span>
            </span>
            <span
              onClick={() => setTheme(colorTheme)}
              className="w-20 h-20 bg-indigo-500 rounded-full mr-5 p-2 shadow-lg cursor-pointer  text-center "
            >
              {colorTheme !== "light" ? (
                <svg
                  className="w-6 h-6 inline-block   "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 inline-block  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </span>
            <Link href="/profile">
              <a class="inline-block text-sm px-4 py-2 leading-none border rounded  hover:border-transparent hover:text-teal-500  mr-5 mt-4 lg:mt-0">
                Profile
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
