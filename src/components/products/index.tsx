"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Box,   Grid, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchProducts } from "@/redux/services/productService";
import Loader from "../ui/Loader";
import NoData from "../ui/NoData";

const Products = () => {
  const t = useTranslations();
  const locale = useLocale();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          width: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Loader />
        </Box>
      </Box>
    );
  }
  if (!products || products.length === 0) {
    return <NoData content={t("no_products")} />;
  }

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "30px",
        }}
        variant="h4"
      >
        {t("our_products")}
      </Typography>
      <Grid
        container
        spacing={4}
        p={7}
        sx={{
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </Grid>
    </>
  );
};

export default Products;
