import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput, {
  OutlinedInputProps,
  outlinedInputClasses,
} from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

import { useIsDarkMode } from "@/utils/hooks/useDarkMode";
import { formLabelClasses, useTheme } from "@mui/material";
import { colors } from "@/utils/colors";

type TextFieldProps = {
  label: string;
  id?: string;
  helperText?: string;
  error?: boolean;
  inputProps?: OutlinedInputProps;
};

export function TextField(props: TextFieldProps) {
  const { label, id, helperText = "", error = false, inputProps } = props;
  const darkMode = useIsDarkMode();
  console.log({ darkMode });

  return (
    <TextFieldSyledCtn>
      <FormControl error={error} variant="standard">
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
        <OutlinedInput {...inputProps} id={id} />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </TextFieldSyledCtn>
  );
}

function TextFieldSyledCtn(props: { children: React.ReactNode }) {
  const theme = useTheme();
  const darkMode = useIsDarkMode();

  return (
    <Box
      sx={{
        [`& .${formLabelClasses.root}.${formLabelClasses.root}`]: {
          position: "relative",
          fontWeight: "bold",
          color: darkMode ? colors.white : colors.mediumGray,
          ...theme.typography.headingL,
        },
        [`& .${outlinedInputClasses.input}`]: {
          height: "40px",
          boxSizing: "border-box",
          ...theme.typography.bodyL,

          "&::placeholder": {
            color: colors.mediumGray,
          },
        },
      }}
    >
      {props.children}
    </Box>
  );
}
