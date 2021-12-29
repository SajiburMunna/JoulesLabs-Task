// import { useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';

import Navbar from "../componets/Navbar/Navbar";

 
// import { getDataAction } from './redux/action';

 

export default function Home() {
  // const dispatch = useDispatch();
  // const Data = useSelector((state) => state.Alldata);
  // console.log(Data.data);
  //  useEffect(() => {
  //    dispatch(getDataAction());
  //  }, []);
  return (
    <div>
       <Navbar></Navbar>
    </div>
  );
}
