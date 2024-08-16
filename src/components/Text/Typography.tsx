import React from "react";
import TypographyMui, { TypographyProps } from "@mui/material/Typography";
import { colors } from "@/utils/colors";

export function Typography(props: TypographyProps) {
  return (
    <TypographyMui
      {...props}
      sx={(theme) => ({
        color: theme.palette.text.primary,

        "&.MuiTypography-headingS": {
          color: colors.mediumGray,
        },
      })}
    />
  );
}
