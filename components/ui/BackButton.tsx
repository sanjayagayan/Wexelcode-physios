import React from "react";
import ContainedButton from "./ContainedButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {
  onClick: () => void;
};
const BackButton = ({ onClick }: Props) => {
  return (
    <ContainedButton startIcon={<ArrowBackIosNewIcon />} onClick={onClick}>
      Back
    </ContainedButton>
  );
};

export default BackButton;
