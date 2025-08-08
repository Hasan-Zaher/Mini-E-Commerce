"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Box, Typography, Button, CardActions } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { toggleFavourite } from "@/redux/slices/favoritesSlice";
import { fetchOneProduct } from "@/redux/services/productService";
import Loader from "@/components/ui/Loader";

const ProductPage = ({ id, locale }: { id: string; locale: string }) => {
  const dispatch = useDispatch();
  const t = useTranslations();

  const { oneProduct, isLoadingOneProduct } = useSelector(
    (state: RootState) => state.product
  );
  const favourites = useSelector((state: RootState) => state.favourite);
  const isFavourite = favourites.some((item) => item.id === oneProduct?.id);
  const cart = useSelector((state: RootState) => state.cart);
  const inCart = cart.some((item) => item.id === oneProduct?.id);

  useEffect(() => {
    if (!oneProduct || oneProduct.id.toString() !== id) {
      dispatch(fetchOneProduct(id));
    }
  }, [dispatch, id, oneProduct]);

  if (isLoadingOneProduct) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
      >
        <Loader />
      </Box>
    );
  }

  if (!oneProduct) {
    return (
      <Box p={4}>
        <Typography
          variant="h5"
          color="primary.danger"
          display="flex"
          justifyContent="center"
        >
          {t("no_product")}
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "320px",
          height: "300px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={oneProduct.image}
          fill={true}
          alt="Picture of the author"
          style={{
            objectFit: "cover",
            border: "1px solid #b1a2a2ff",
            padding: "12px",
          }}
        />

        <CardActions
          sx={{
            position: "absolute",
            right: "0px",
            top: "0px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(toggleFavourite(oneProduct))}
        >
          {isFavourite ? (
            <MdFavorite size={26} color="red" />
          ) : (
            <MdFavoriteBorder size={26} color="black" />
          )}
        </CardActions>
      </Box>
      <Typography variant="h4" my={3}>
        {locale === "ar" ? oneProduct.title.ar : oneProduct.title.en}
      </Typography>
      <Typography variant="body1" mt={2}>
        {locale === "ar"
          ? oneProduct.description.ar
          : oneProduct.description.en}
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={3}
      >
        <Typography variant="h6">
          {t("price")}: {oneProduct.price} $
        </Typography>
        <Box
          onClick={() => dispatch(addToCart(oneProduct))}
          sx={{
            cursor: "pointer",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {inCart ? (
            <FaCartPlus size={25} color="#d6b911ff" />
          ) : (
            <FaCartPlus size={25} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
