import React from 'react'

const Feature = () => {
    const  feature = [
      {
        id: 1,
        name: "Feature",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 2,
        name: "Feature1",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 3,
        name: "Feature2",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 4,
        name: "Feature3",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 5,
        name: "Feature5",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 6,
        name: "Feature6",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 7,
        name: "Feature8",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 8,
        name: "Feature9",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      {
        id: 9,
        name: "Feature10",
        description:
          "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      },
      
    ];
    return (
      <div>
        <h1 className=" text-3xl font-bold ml-6">Featured Posts</h1>
        <div class="grid grid-cols-3 gap-4   mt-3 mb-5">
          {feature.map((ft) => (
            <div class="flex justify-center">
              <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                  <img src="" alt="" />
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  {ft.name}
                </h5>
                <p class="text-gray-700 text-base mb-4">{ft.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className=" text-3xl font-bold ml-6">Popular this wek</h1>
      </div>
    );
}

export default Feature
