import { Button } from "@mui/material";
import { FC } from "react";

type Props = {
  content: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
};

const CustomButton: FC<Props> = ({ content, onClick, color = "primary" }) => {
  return (
    <Button color={color} variant="contained" onClick={onClick}>
      {content}
    </Button>
  );
};

export default CustomButton;
