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




