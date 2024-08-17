import { styled } from "@mui/material";
import SwitchMui, { SwitchProps } from "@mui/material/Switch";

import { colors } from "@/utils/colors";

export const Switch = styled((props: SwitchProps) => (
  <SwitchMui
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  position: "relative",

  "& .MuiSwitch-switchBase": {
    padding: 0,
    transitionDuration: "300ms",
    position: "absolute",
    top: "50%",
    left: "4px",
    transform: "translate(0, -50%)",

    "&.Mui-checked": {
      transform: "translate(18px, -50%)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: colors.mainPurple,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 14,
    height: 14,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
