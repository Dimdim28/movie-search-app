import { useAppDispatch } from "@/hooks/appHooks";
import { fetchMovies } from "@/redux/movies/asyncActions";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Error {
  text: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Error: React.FC<Error> = ({ text, setIsActive }) => {
  const dispatch = useAppDispatch();
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <h1>{text}</h1>
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={() => {
          dispatch(fetchMovies({ title: "star" }));
          setIsActive(false);
        }}
      >
        Try again
      </Button>
    </Box>
  );
};

export default Error;
