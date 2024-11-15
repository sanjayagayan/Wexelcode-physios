"use client";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  TextFieldProps,
  TextField,
} from "@mui/material";
import { useState } from "react";

const PasswordFelid: React.FC<TextFieldProps> = ({ ...props },{label}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      fullWidth
      type={showPassword ? "text" : "password"}
      label={label}
      variant="outlined"
      maxRows={1}
      inputProps={{ maxLength: 12 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordFelid;
