import React from "react";
import CheckboxMui, {
  CheckboxProps,
  checkboxClasses,
} from "@mui/material/Checkbox";
import FormControlLabel, {
  formControlLabelClasses,
} from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

import { colors } from "@/utils/colors";
import { alpha } from "@mui/material";

type SubtaskCheckboxProps = CheckboxProps & {
  label: string;
};

export function SubtaskCheckbox(props: SubtaskCheckboxProps) {
  const { label } = props;

  return (
    <FormControlLabel
      sx={{
        width: "100%",
        backgroundColor: colors.lightGrey,
        borderRadius: "4px",
        paddingRight: "12px",

        "&:hover": {
          backgroundColor: alpha(colors.mainPurple, 0.25),
        },

        [`& .${formControlLabelClasses.label}`]: {
          fontWeight: "bold",
          fontSize: "12px",
          color: colors.black,
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
