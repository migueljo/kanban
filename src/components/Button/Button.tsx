import React from "react";

import {
  ButtonProps,
  PrimaryButton,
  SecondaryButton,
  DestructiveButton,
  EdgeButton,
} from "./ButtonVariants";

export function Button(props: ButtonProps) {
  const { kind = "primary", size = "large", sx, ...restProps } = props;
  const buttonProps = { kind, size, ...restProps };

  if (kind === "primary") {
    return <PrimaryButton {...buttonProps} />;
  } else if (kind === "secondary") {
    return <SecondaryButton {...buttonProps} />;
  } else if (kind === "destructive") {
    return <DestructiveButton {...buttonProps} />;
  } else if (kind === "edge") {
    return <EdgeButton {...buttonProps} />;
  }
}
