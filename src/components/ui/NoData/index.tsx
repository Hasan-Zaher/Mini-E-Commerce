
import { Box, Typography } from "@mui/material";
import React from "react";

interface NoDataProps {
  content: React.ReactNode;
}

const NoData: React.FC<NoDataProps> = ({ content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "50vh",
        padding: 3,
        backgroundColor: "rgba(245, 245, 245, 0.5)",
        borderRadius: 2,
        border: "1px dashed #e0e0e0",
      }}
    >
      <Typography variant="h6">{content}</Typography>
    </Box>
  );
};

export default NoData;
