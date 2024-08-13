import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";

import { useDarkMode } from "@/utils/hooks/useDarkMode";

type TextFieldProps = {
  label: string;
  id?: string;
  helperText?: string;
  error?: boolean;
  inputProps?: OutlinedInputProps;
};

export function TextField(props: TextFieldProps) {
  const { label, id, helperText = "", error = false, inputProps } = props;
  const darkMode = useDarkMode();
  console.log("darkMode", darkMode);

  return (
    <>
      <FormControl error={error} variant="standard">
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
        <OutlinedInput {...inputProps} id={id} />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
}
