import Link from "next/link";

const Navbar = () => {
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
            <Link href="/profile">
              <a class="inline-block text-sm px-4 py-2 leading-none border rounded  hover:border-transparent hover:text-teal-500   mt-4 lg:mt-0">
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
