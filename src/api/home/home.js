import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";


export const getCotegory = createAsyncThunk(
    "home/getCotegory",
    async function () {
      try {
        const { data } = await axiosRequest.get("Category/get-categories");
        return data.data;
      } catch (error) {}
    }
  );




  export const getCotegoryById = createAsyncThunk(
    "home/getCotegoryById",
    async function (id) {
      try {
        const { data } = await axiosRequest.get(`Category/get-category-by-id?id=${id}`);
        return data.data;
      } catch (error) {}
    }
  );



  export const getProduct = createAsyncThunk(
    "home/getProduct",
    async function () {
      try {
        const { data } = await axiosRequest.get('/Product/get-products');
        // console.log(data);
        return data.data.products;
      } catch (error) {}
    }
  );



  export const addToCart = createAsyncThunk(
    "home/addToCart",
    async function (product,id) {
      // console.log(1);
      // console.log(id);
      try {
        const { data } = await axiosRequest.post(`add-product-to-cart?id=${id}`,product);

      } catch (error) {}
    }
  );



  export const getCart = createAsyncThunk(
    "home/getCart",
    async function () {
      try {
        const { data } = await axiosRequest.get('Cart/get-products-from-cart');
        return data;
      } catch (error) {}
    }
  );
  

  



  





