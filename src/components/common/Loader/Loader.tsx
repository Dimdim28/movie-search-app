import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Loader = () => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Loader;
