"use client";

import Link from "next/link";
import { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ContainedButton from "../ui/ContainedButton";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [anchorElService, setAnchorElService] = useState<null | HTMLElement>(
    null
  );

  const handleOpenServiceMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElService(event.currentTarget);
  };

  const handleCloseServiceMenu = () => {
    router.push("/dashboard")
    setAnchorElService(null);
  };

  const handleLogin = () => {
    router.push("/signin")
  };

  const handleSignup = () => {
    router.push("/signup")
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", paddingY:2, paddingX:4 }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 5 }}>
          <Link href="/">
            <Image
              alt="logo"
              src="/images/logo.png"
              width={90}
              height={52}
              priority
            />
          </Link>
        </Box>

        {/* Menu Items */}
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <Link href="/" style={{ marginRight: 36, fontSize:17 }}>
            Home
          </Link>

          <Link
            href={"#"}
            onClick={handleOpenServiceMenu}
            style={{ marginRight: 36, fontSize:17 }}
          >
            Service
          </Link>
          <Menu
            anchorEl={anchorElService}
            open={Boolean(anchorElService)}
            onClose={handleCloseServiceMenu}
          >
            <MenuItem onClick={handleCloseServiceMenu}>Book Appointment</MenuItem>
          </Menu>

          <Link href="/about" style={{ marginRight: 36, fontSize:17 }}>
            About
          </Link>
          <Link href="/pricing" style={{ marginRight: 36, fontSize:17 }}>
            Pricing
          </Link>
          <Link href="/blog" style={{ marginRight: 36, fontSize:17 }}>
            Blog
          </Link>
          <Link href="/contact">Contact</Link>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <SearchIcon sx={{ color: "#3D565F" }} />
          </IconButton>

          <FormControl sx={{ mr: 2 }}>
            <Select
              value="EN"
              onChange={() => {}}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", 
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none", 
                },
              }}
              MenuProps={{
                PaperProps: { sx: { bgcolor: "background.paper" } },
              }}
            >
              <MenuItem value="EN">EN</MenuItem>
            </Select>
          </FormControl>

          <ContainedButton sx={{ mr: 2, width:120, height:48 }} onClick={handleSignup}>Sign up</ContainedButton>
          <Button variant="outlined" color="error" sx={{width:120, height:48, textTransform:"none"}} onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
