import { ThemeOptions } from "@mui/material";

export const components: ThemeOptions["components"] = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        xl: "h1",
        l: "h2",
        m: "h3",
        s: "h4",
        bodyL: "p",
        bodyM: "p",
      },
    },
  },
};
