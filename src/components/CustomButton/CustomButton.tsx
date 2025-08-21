"use client";
import { Button, styled } from "@mui/material";
import cx from "classnames";

const StyledButton = styled(Button)({
  backgroundColor: "#454545",
  color: "#fff",
  height: 40,
  lineHeight: 2,
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    backgroundColor: "#5a5a5a",
  },

  "&.camel": {
    border: "1px solid #ffc8dd",
    backgroundImage:
      "linear-gradient(90deg, rgba(255,234,242,1) 0%, rgba(255,200,221,1) 100%)",
    zIndex: 1,

    "&::before": {
      content: "''",
      position: "absolute",
      inset: 0,
      opacity: 0,
      zIndex: -1,
      backgroundImage:
        "linear-gradient(90deg, rgba(255,200,221,1) 0%, rgba(255,234,242,1) 100%)",
      transition: "all 0.3s ease-in-out",
    },

    "&:hover": {
      "&::before": {
        opacity: 1,
      },
    },
  },

  "&.secondary": {
    color: "#ffc8dd",
    background: "transparent",
    border: "1px solid #ffc8dd",

    "&:hover": {
      background: "#ffc8dd 0% 0% no-repeat padding-box;",
      color: "#fff"
    },
  },

  "&.Mui-disabled": {
    background: "#C9C9C9",
    color: "#929292",
    border: "1px solid #929292",
  },
});

// @ts-ignore
const CustomButton = ({ camel, secondary, className, ...props }) => {
  return (
    <StyledButton
      className={cx({ [className]: className, camel, secondary })}
      {...props}
    />
  );
};

export default CustomButton;
