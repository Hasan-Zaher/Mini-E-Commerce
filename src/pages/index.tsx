"use client";

import Loader from "@/components/ui/Loader";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

export const HomePage = dynamic(() => import("@/pages/HomePage/index"));

export const FavouritesPage = dynamic(() => import("@/pages/FavouritePage"), {
  loading: () => (
    <Box display="flex" justifyContent="center" mt={10}>
      <Loader />
    </Box>
  ),
  ssr: false,
});

export const CartPage = dynamic(() => import("@/pages/CartPage/index"), {
  loading: () => (
    <Box display="flex" justifyContent="center" mt={10}>
      <Loader />
    </Box>
  ),
  ssr: false,
});
