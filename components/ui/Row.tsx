import { Box, BoxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface RowProps extends BoxProps {
  children?: ReactNode;
  width?: string;
}
const Row = ({ children, width = "100%", ...rest }: RowProps) => {
  return (
    <Box display="flex" width={width} justifyContent="space-between" {...rest}>
      {children}
    </Box>
  );
};
export default Row;
