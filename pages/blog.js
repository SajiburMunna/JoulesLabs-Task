import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, cartAction } from "./redux/action";

const Blog = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);
  console.log(Data.data);
  useEffect(() => {
    dispatch(getDataAction());
  }, []);
  return (
    <div>
      <h1 className="text-center text-xl font-medium ">Blogs</h1>
      <div className="flex flex-wrap  text-center p-10 ml-32 items-center">
        {Data.data.map((bg) => (
          <div class="p-6 w-64  h-40  mb-5 mr-5 bg-white rounded-xl shadow-lg   ">
            <div>
              <div class="text-xl font-medium text-black">Blog No: {bg.id}</div>
              <p class="text-gray-500">Blog Name: {bg.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
