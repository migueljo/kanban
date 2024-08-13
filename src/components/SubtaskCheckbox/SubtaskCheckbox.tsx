import React from "react";
import CheckboxMui, {
  CheckboxProps,
  checkboxClasses,
} from "@mui/material/Checkbox";
import FormControlLabel, {
  formControlLabelClasses,
} from "@mui/material/FormControlLabel";

import { colors } from "@/utils/colors";
import { alpha, useTheme } from "@mui/material";
import { useDarkMode } from "@/utils/hooks/useDarkMode";

type SubtaskCheckboxProps = CheckboxProps & {
  label: string;
};

export function SubtaskCheckbox(props: SubtaskCheckboxProps) {
  const { label } = props;
  const darkMode = useDarkMode();

  return (
    <FormControlLabel
      sx={{
        width: "100%",
        backgroundColor: darkMode ? colors.veryDarkGrey : colors.lightGrey,
        borderRadius: "4px",
        paddingRight: "12px",

        "&:hover": {
          backgroundColor: alpha(colors.mainPurple, 0.25),
        },

        [`& .${formControlLabelClasses.label}`]: {
          fontWeight: "bold",
          fontSize: "12px",
          color: darkMode ? colors.white : colors.black,
        },
        [`& .${formControlLabelClasses.asterisk}`]: {
          fontWeight: "bold",
          fontSize: "12px",
          color: darkMode ? colors.white : colors.black,
        },

        [`& .${checkboxClasses.checked} ~ .${formControlLabelClasses.label}`]: {
          textDecoration: "line-through",
          color: colors.mediumGray,
        },
        [`& .${checkboxClasses.checked} ~ div > .${formControlLabelClasses.label}`]:
          {
            textDecoration: "line-through",
            color: colors.mediumGray,
          },
        [`& .${checkboxClasses.checked} ~ div > .${formControlLabelClasses.asterisk}`]:
          {
            color: colors.mediumGray,
          },
      }}
      control={<CheckboxMui {...props} />}
      label={label}
    />
  );
}
