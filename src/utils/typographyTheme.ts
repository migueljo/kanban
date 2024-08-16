import { ThemeOptions } from "@mui/material";

import { colors } from "./colors";

const fontFamily = ["Plus Jakarta Sans", "sans-serif"].join(",");

export const typography: ThemeOptions["typography"] = {
  fontFamily,
  headingXL: {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    fontFamily,
  },
  headingL: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    fontFamily,
  },
  headingM: {
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "19px",
    fontFamily,
  },
  headingS: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: "2.4px",
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
    headingXL: React.CSSProperties;
    headingL: React.CSSProperties;
    headingM: React.CSSProperties;
    headingS: React.CSSProperties;
    bodyL: React.CSSProperties;
    bodyM: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    headingXL?: React.CSSProperties;
    headingL?: React.CSSProperties;
    headingM?: React.CSSProperties;
    headingS?: React.CSSProperties;
    bodyL?: React.CSSProperties;
    bodyM?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headingXL: true;
    headingL: true;
    headingM: true;
    headingS: true;
    bodyL: true;
    bodyM: true;
  }
}
