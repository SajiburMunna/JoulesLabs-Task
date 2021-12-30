import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, cartAction } from "./redux/action";
const Shop = () => {
     const dispatch = useDispatch();
    
    
  const products = [
    {
      id: 1,
      name: "Book",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 2,
      name: "Book1",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 3,
      name: "Book2",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 4,
      name: "Book3",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 5,
      name: "Book5",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 6,
      name: "Book6",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 7,
      name: "Book8",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 8,
      name: "Book9",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 9,
      name: "Book10",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
    {
      id: 10,
      name: "Book11",
      description:
        "Libero quasi, suscipit modi error alias cupiditate officiis laboriosam optio, blanditiis est ipsa odio voluptate vitae",
      price: 100,
    },
  ];
  return (
    <div>
      <h1 className="text-center text-xl font-medium ">Shops</h1>
      <div className="flex flex-wrap  text-center p-10 ml-32 items-center">
        {products.map((bg) => (
          <div class="p-6 w-64  h-64  mb-5 mr-5 bg-white rounded-xl shadow-lg   ">
            <div>
              <div class="text-xl font-medium text-black">{bg.name}</div>
              <p class="text-gray-500"> {bg.description}</p>
              <p class="text-gray-500">Price:{bg.price}Tk</p>
              <button
                onClick={() => dispatch(cartAction(bg))}
                className="text-black bg-indigo-500 p-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
