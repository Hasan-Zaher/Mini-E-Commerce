import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { FaHeadset, FaLeaf, FaLock, FaShippingFast } from "react-icons/fa";

const features = [
  {
    title: "free_shipping",
    desc: "free_shipping_description",
    icon: <FaShippingFast size={30} />,
  },
  {
    title: "secure_payment",
    desc: "secure_payment_description",
    icon: <FaLock size={30} />,
  },
  {
    title: "good_taste",
    desc: "good_taste_description",
    icon: <FaLeaf size={30} />,
  },
  {
    title: "online_support",
    desc: "online_support_description",
    icon: <FaHeadset size={30} />,
  },
];

const WhyUs = () => {
  const t = useTranslations();

  return (
    <Box
      py={8}
      sx={{
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid
          container
          spacing={5}
          sx={{
            justifyContent: "center",
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: "16px",
                  backgroundColor: "#FFF",
                  boxShadow: "4",
                  padding: "20px",
                }}
              >
                <Box mb={2} color="primary.main">
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t(feature.title)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(feature.desc)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;
