import NextImage from "next/image";
import { styled } from "@mui/system";
import { useMediaQuery } from "@mui/material";

export const Container = styled("header")({
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  width: "100%",
  padding: "20px 10px",
});

export const CustomLink = styled("a")((props) => {
  return {
    color: props.color,
    cursor: "pointer",
    textTransform: "capitalize",
    fontWeight: 600,
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "auto 1fr",
    gap: 10
  };
});
