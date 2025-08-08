import { API_BASE_URL } from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL PRODUCTS //
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  }
);

// GET ONE PRODUCTS //
export const fetchOneProduct = createAsyncThunk(
  "products/fetchById",
  async (id: string | number) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  }
);
