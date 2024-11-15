import React, { ReactNode } from "react";
import { Box, Button, ButtonProps, CircularProgress } from "@mui/material";

interface LoadingButtonProps extends ButtonProps {
  children?: ReactNode;
  loading?: boolean;
  backgroundColor?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  backgroundColor = "#A51008",
  loading,
  ...props
}) => {
  return (
    <Button
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        backgroundColor,
        "&:hover": {
          backgroundColor,
          opacity: 0.7,
        },
      }}
      {...props}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        {loading && (
          <CircularProgress
            size={20}
            sx={{ marginRight: 2 }}
            style={{ color: "#ACACAC" }}
          />
        )}
        {children}
      </Box>
    </Button>
  );
};

export default LoadingButton;
