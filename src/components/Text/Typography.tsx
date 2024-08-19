import React from "react";
import TypographyMui, { TypographyProps } from "@mui/material/Typography";

import { colors } from "@/utils/colors";

export function Typography(props: TypographyProps) {
  const { color, ...restProps } = props;

  return (
    <TypographyMui
      {...restProps}
      sx={(theme) => ({
        color: color ?? theme.palette.text.primary,

        "&.MuiTypography-headingS": {
          color: colors.mediumGrey,
        },
      })}
    />
  );
}
