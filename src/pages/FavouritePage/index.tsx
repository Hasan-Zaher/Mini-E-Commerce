"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import ProductCard from "@/components/ProductCard";
import { useLocale, useTranslations } from "next-intl";
import NoData from "@/components/ui/NoData";
import { MdFavorite, MdDeleteSweep } from "react-icons/md";
import { RootState } from "@/redux/store";
import { clearFavourites } from "@/redux/slices/favoritesSlice";

const FavouritesPageContent = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourite);
  const locale = useLocale();
  const t = useTranslations();

  if (favourites.length === 0) {
    return <NoData content={t("no_favourites")} />;
  }

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box display="flex" alignItems="center">
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "20px",
                lg: "28px",
              },
            }}
          >
            {t("favourite_products")}
          </Typography>
        </Box>

        <Tooltip title={t("clear_favourites")}>
          <IconButton
            onClick={() => dispatch(clearFavourites())}
            sx={{
              backgroundColor: "primary.danger",
              color: "white",
              "&:hover": { backgroundColor: "primary.danger" },

              fontSize: {
                xs: "20px",
                lg: "24px",
              },
            }}
          >
            <MdDeleteSweep />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4}>
        {favourites.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </Grid>
    </Container>
  );
};

export default FavouritesPageContent;
