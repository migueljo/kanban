import { ThemeOptions } from "@mui/material";

import { colors } from "./colors";

const fontFamily = ["Plus Jakarta Sans", "sans-serif"].join(",");

export const typography: ThemeOptions["typography"] = {
  fontFamily,
  xl: {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    fontFamily,
  },
  l: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    fontFamily,
  },
  m: {
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "19px",
    fontFamily,
  },
  s: {
    color: colors.mediumGray,
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "15px",
    fontFamily,
  },
  bodyL: {
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "23px",
    fontFamily,
  },
  bodyM: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "15px",
    fontFamily,
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    xl: React.CSSProperties;
    l: React.CSSProperties;
    m: React.CSSProperties;
    s: React.CSSProperties;
    bodyL: React.CSSProperties;
    bodyM: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    xl?: React.CSSProperties;
    l?: React.CSSProperties;
    m?: React.CSSProperties;
    s?: React.CSSProperties;
    bodyL?: React.CSSProperties;
    bodyM?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xl: true;
    l: true;
    m: true;
    s: true;
    bodyL: true;
    bodyM: true;
  }
}
