 

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
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl   mr-4"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200   mr-4 text-xl"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  text-xl"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
