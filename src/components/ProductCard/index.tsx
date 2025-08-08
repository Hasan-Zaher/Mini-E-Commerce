"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Box,
} from "@mui/material";
import Image from "next/image";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { toggleFavourite } from "@/redux/slices/favoritesSlice";
import { RootState } from "@reduxjs/toolkit/query";

const ProductCard = ({ product, locale }: any) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourite);
  const isFavourite = favourites.some((item) => item.id === product.id);
  const cart = useSelector((state: RootState) => state.cart);
  const inCart = cart.some((item) => item.id === product.id);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "240px",
            height: "200px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {" "}
          <Link href={`/${locale}/product/${product.id}`}>
            <Image
              src={product.image}
              fill={true}
              alt="Picture of the author"
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
          <CardActions
            sx={{
              position: "absolute",
              right: "0px",
              top: "0px",
              cursor: "pointer",
            }}
            onClick={() => dispatch(toggleFavourite(product))}
          >
            {isFavourite ? (
              <MdFavorite size={26} color="red" />
            ) : (
              <MdFavoriteBorder size={26} color="black" />
            )}
          </CardActions>
        </Box>

        <CardContent>
          <Typography variant="h6">
            {locale === "ar" ? product.title.ar : product.title.en}
          </Typography>
        </CardContent>
        <Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "12px",
              borderTop: "1px solid #333",
              borderBottom: "2px solid #333",
              borderRadius: "3px",
            }}
          >
            <Box
              onClick={() => dispatch(addToCart(product))}
              sx={{
                cursor: "pointer",
              }}
            >
              {inCart ? (
                <FaCartPlus size={25} color="#d6b911ff" />
              ) : (
                <FaCartPlus size={25} />
              )}
            </Box>
            <Typography variant="h6">{product.price} $</Typography>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default ProductCard;
