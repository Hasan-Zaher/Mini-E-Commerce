import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "../ui/Button";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations();
  return (
    <Box
      sx={{
        backgroundColor: "#CCC",
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          textAlign="center"
        >
          <Grid
            item
            xs={12}
            md={5}
            display="flex"
            flexDirection="column"
            textAlign="center"
            sx={{
              textAlign: {
                xs: "center",
                lg: "start",
              },
              width: {
                xs: "100%",
                lg: "auto",
              },
              gap: {
                xs: "7px",
                lg: "20px",
              },
              padding: {
                xs: "20px",
              },
            }}
          >
            <Typography variant="h4" fontWeight={500} padding="0">
              {t("Welcome_Chocolate_Shop")}
            </Typography>

            <Typography variant="body1">{t("Explore_chocolates")}</Typography>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: {
                  xs: "center",
                  lg: "start",
                },
              }}
            >
              <CustomButton content={t("shop_now")} />
              <CustomButton content={t("View_Deals")} color="secondary" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: {
                xs: "100%",
                lg: "auto",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 300, sm: 400, md: 500 },
                height: { xs: 300, sm: 200, md: 250 },
                borderRadius: "40px",
                textAlign: "center",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Image
                src="/images/heroImage.jpg"
                alt="heroImage"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
