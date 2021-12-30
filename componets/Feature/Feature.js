import React from "react";

const Feature = () => {
  const feature = [
    {
      id: 1,
      name: "Feature",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
    {
      id: 2,
      name: "Feature",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam",
    },
    {
      id: 3,
      name: "Feature",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
  ];
  const popular = [
    {
      id: 1,
      name: "Popular",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
    {
      id: 2,
      name: "Popular1",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
    {
      id: 3,
      name: "Popular2",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
    {
      id: 4,
      name: "Popular3",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
    {
      id: 5,
      name: "Popular5",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
    {
      id: 6,
      name: "Popular6",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam  ",
    },
  ];
  return (
    <div>
      <h1 className=" text-3xl font-bold ml-6">Feature Posts</h1>
      <div class="grid grid-cols-3 gap-4   mt-3 mb-5">
        {feature.map((ft) => (
          <div class="flex justify-center">
            <div class="block p-6     max-w-sm">
              <img src="/tour.jpg" alt="" />
              <h5 class="  text-xl  font-medium mb-2">{ft.name}</h5>
              <p class="text-gray-700 text-base mb-4">{ft.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className=" text-3xl font-bold ml-6">Popular this week</h1>
      <div class="grid grid-cols-3 gap-4   mt-3 mb-5">
        {popular.map((ft) => (
          <div class="flex justify-center">
            <div class="block p-6    max-w-sm">
              <img src="/feature.png" alt="" />
              <h5 class="  text-xl   font-medium mb-2">{ft.name}</h5>
              <p class="text-gray-700 text-base mb-4">{ft.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className=" text-3xl font-bold ml-6">Recents Post</h1>
      <div class="grid grid-cols-2 gap-3   mt-3 mb-5">
        {popular.map((ft) => (
          <div class="p-6 max-w-sm mx-auto   flex items-center ">
            <div class="shrink-0">
              <img class="h-40 w-80" src="/feature.png" alt="ChitChat Logo" />
            </div>
            <div className="ml-2">
              <div class="text-xl font-medium  ">{ft.name}</div>

              <p class="text-gray-700 text-base mb-4">{ft.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
