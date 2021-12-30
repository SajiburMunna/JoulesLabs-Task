import { dataStoreSlice } from "./slice";
import axios from "axios";
const { actions: slice } = dataStoreSlice;

export const getDataAction = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => dispatch(slice.setData(response.data)));
};

export const searchAction = (searchValue) => (dispatch) => {
  dispatch(slice.searchData(searchValue));
};
export const  cartAction = (cart) => (dispatch) => {
  dispatch(slice.cartData(cart));
};
