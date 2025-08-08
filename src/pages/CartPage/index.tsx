"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  IconButton,
  Container,
} from "@mui/material";

import { useLocale, useTranslations } from "next-intl";
import NoData from "@/components/ui/NoData";

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  clearCart,
} from "@/redux/slices/cartSlice";
import { MdDeleteSweep, MdAdd, MdRemove, MdDelete } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/services/productService";

const CartContent = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { products, isLoading } = useSelector(
    (state: RootState) => state.product
  );

  const t = useTranslations();
  const dispatch = useDispatch();
  const locale = useLocale();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (cart.length === 0) {
    return <NoData content={t("no_cart_products")} />;
  }

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "27px",
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{ fontSize: { xs: "20px", lg: "28px" } }}
        >
          {t("cart_products")}
        </Typography>

        <Tooltip title={t("clear_cart")}>
          <IconButton
            onClick={() => dispatch(clearCart())}
            sx={{
              backgroundColor: "primary.danger",
              color: "white",
              "&:hover": { backgroundColor: "primary.danger" },
              fontSize: { xs: "20px", lg: "24px" },
            }}
          >
            <MdDeleteSweep />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <Box>
        {cart.map((item) => {
          const product = products.find((p) => p.id === item.id);
          const maxQuantity = product ? product.stock || 1 : 1;

          return (
            <Grid key={item.id}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", lg: "row" },

                  marginBottom: "40px",
                }}
              >
                <Link href={`/${locale}/product/${item.id}`}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "240px",
                      height: "200px",
                      overflow: "hidden",
                      position: "relative",
                      margin: "20px ",
                    }}
                  >
                    <Image
                      src={item.image}
                      fill={true}
                      alt="Picture of the author"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Link>
                <CardContent
                  sx={{
                    flex: 1,
                    justifyItems: "center",
                  }}
                >
                  <Typography variant="h6">
                    {locale === "ar" ? item.title.ar : item.title.en}
                  </Typography>
                  <Typography>
                    {t("price")}: {item.price}$
                  </Typography>
                  <Box display="flex" alignItems="center" mt={1} gap={2}>
                    <Tooltip title={t("decrease")}>
                      <IconButton
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        sx={{
                          border: "1px solid #333",
                          borderRadius: "0px",
                          padding: "2px",
                        }}
                      >
                        <MdRemove />
                      </IconButton>
                    </Tooltip>
                    <Typography>{item.quantity}</Typography>
                    <Tooltip title={t("increase")}>
                      <IconButton
                        onClick={() =>
                          dispatch(
                            incrementQuantity({ id: item.id, max: maxQuantity })
                          )
                        }
                        disabled={item.quantity >= maxQuantity}
                        sx={{
                          border: "1px solid #333",
                          borderRadius: "0px",
                          padding: "2px",
                        }}
                      >
                        <MdAdd />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title={t("remove_from_cart")}>
                      <IconButton
                        onClick={() => dispatch(removeFromCart(item.id))}
                        color="error"
                      >
                        <MdDelete />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Box>
    </Container>
  );
};

export default CartContent;
