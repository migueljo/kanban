import React from "react";
import TypographyMui, { TypographyProps } from "@mui/material/Typography";

export function Typography(props: TypographyProps) {
  return (
    <TypographyMui
      {...props}
      sx={(theme) => ({
        color: theme.palette.text.primary,
      })}
    />
  );
}
