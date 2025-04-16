import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: "48px",
        backgroundColor: "#1976d2",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body2">© 2025 Your Company</Typography>
    </Box>
  );
};

export default Footer;
