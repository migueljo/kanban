import React from "react";
import MuiButton, {
  buttonClasses,
  ButtonProps as ButtonPropsMui,
} from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

import { colors } from "@/utils/colors";

const ButtonBaseStyled = styled(MuiButton)(({ theme, size }) => ({
  height: size === "large" ? "48px" : "40px",
  borderRadius: size === "large" ? "24px" : "20px",
  textTransform: "none",
  boxShadow: "none",

  "&:hover": {
    boxShadow: "none",
  },
}));

const PrimaryButtonStyled = styled(ButtonBaseStyled)({
  backgroundColor: colors.mainPurple,
  color: colors.white,

  "&:hover": {
    backgroundColor: colors.mainPurpleHover,
  },
});

const SecondaryButtonStyled = styled(ButtonBaseStyled)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? alpha(colors.mainPurple, 0.1)
      : colors.white,
  color: colors.mainPurple,

  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? alpha(colors.mainPurple, 0.25)
        : colors.white,
  },
}));

const DestructiveButtonStyled = styled(ButtonBaseStyled)({
  backgroundColor: colors.red,
  color: colors.white,

  "&:hover": {
    backgroundColor: colors.redHover,
  },
});

const EdgeButtonStyled = styled(ButtonBaseStyled)({
  backgroundColor: colors.mainPurple,
  color: colors.white,
  borderRadius: "0 100px 100px 0",
  fontWeight: 500,
  textAlign: "left",
  paddingLeft: "32px",
  justifyContent: "flex-start",

  "&:hover": {
    backgroundColor: colors.mainPurpleHover,
  },

  [`& .${buttonClasses.startIcon}`]: {
    display: "flex",
    alignItems: "center",
  },
});

export function SecondaryButton(props: ButtonProps) {
  return <SecondaryButtonStyled {...props} variant="contained" />;
}

export function DestructiveButton(props: ButtonProps) {
  return <DestructiveButtonStyled {...props} />;
}

export const EdgeButton = (props: ButtonProps) => {
  return <EdgeButtonStyled {...props} variant="contained" />;
};

export function PrimaryButton(props: ButtonProps) {
  return <PrimaryButtonStyled {...props} variant="contained" />;
}

export type ButtonProps = ButtonPropsMui & {
  kind?: "primary" | "secondary" | "destructive" | "edge";
};
