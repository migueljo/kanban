import React from "react";
import MuiButton, { ButtonProps as ButtonPropsMui } from "@mui/material/Button";
import { alpha, styled, SxProps } from "@mui/material/styles";

import { colors } from "@/utils/colors";

const PrimaryButtonStyled = styled(MuiButton)({
  backgroundColor: colors.mainPurple,
  color: colors.white,

  "&:hover": {
    backgroundColor: colors.mainPurpleHover,
  },
});

function PrimaryButton(props: ButtonProps) {
  return <PrimaryButtonStyled {...props} variant="contained" />;
}

const SecondaryButtonStyled = styled(MuiButton)({
  backgroundColor: alpha(colors.mainPurple, 0.1),
  color: colors.mainPurple,

  "&:hover": {
    backgroundColor: alpha(colors.mainPurple, 0.25),
  },
});

function SecondaryButton(props: ButtonProps) {
  return <SecondaryButtonStyled {...props} variant="contained" />;
}

const DestructiveButtonStyled = styled(MuiButton)({
  backgroundColor: colors.red,
  color: colors.white,

  "&:hover": {
    backgroundColor: colors.redHover,
  },
});

function DestructiveButton(props: ButtonProps) {
  return <DestructiveButtonStyled {...props} />;
}

type ButtonProps = ButtonPropsMui & {
  kind?: "primary" | "secondary" | "destructive";
};

export function Button(props: ButtonProps) {
  const { kind = "primary", size = "large", ...restProps } = props;
  const commonSxStyles: SxProps = {
    height: size === "large" ? "48px" : "40px",
    borderRadius: size === "large" ? "24px" : "20px",
    textTransform: "none",
    boxShadow: "none",
    minWidth: "255px",

    "&:hover": {
      boxShadow: "none",
    },
  };

  const buttonProps = { kind, size, sx: commonSxStyles, ...restProps };

  if (kind === "primary") {
    return <PrimaryButton {...buttonProps} />;
  } else if (kind === "secondary") {
    return <SecondaryButton {...buttonProps} />;
  } else if (kind === "destructive") {
    return <DestructiveButton {...buttonProps} />;
  }
}
