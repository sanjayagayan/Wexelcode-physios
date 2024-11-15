"use client";

import * as React from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  alpha,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuLinkButton from "@/components/ui/MenuLinkButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Image from "next/image";
import { ReactNode } from "react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicalScreening from "../../ui/MedicalScreeningCard";
import Calender from "../../ui/Calender";
import Profile from "modules/profile/Profile";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 5px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 5px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface ProfileProps {
  name: string;
  age: number;
  country: string;
  languages: string;
  phoneNumber: string;
  address: string;
  email: string;
  dob: string;
  gender: string;
  weight: number;
  height: number;
  activityLevel: string;
  creditCard: string;
  tokens: number;
  screeningProgress: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  backgroundColor: "#ffffff",
  color: "#000000",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const handleSignout = () => signOut({ callbackUrl: "/signin" });
const logoutButton = {
  label: "Logout",
  icon: <LogoutIcon />,
  onClick: handleSignout,
};

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const path = usePathname();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(true);
  const [language, setLanguage] = React.useState("");
  if (path.includes("/video-call")) {
    return children;
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <FormControl sx={{ m: 0, minWidth: 60 }}>
        <Select
          value={language}
          onChange={handleLanguage}
          displayEmpty
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="">
            <em>EN</em>
          </MenuItem>
          <MenuItem value={10}>FR</MenuItem>
          <MenuItem value={20}>CH</MenuItem>
          <MenuItem value={30}>IN</MenuItem>
        </Select>
      </FormControl>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <HomeOutlinedIcon />,
    },
    {
      label: "My Appointments",
      href: "/appointments",
      icon: <ListAltOutlinedIcon />,
    },
    {
      label: "AI Assistant",
      href: "/ai-assistant",
      icon: <ChatOutlinedIcon />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <PersonOutlineOutlinedIcon />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: alpha(theme.palette.common.black, 0.05),
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ boxShadow: 0 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap sx={{ fontWeight: "bold" }}>
            Hi, Stevan dux
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <FormControl sx={{ m: 0, minWidth: 60 }}>
              <Select
                value={language}
                onChange={handleLanguage}
                displayEmpty
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="">
                  <em>EN</em>
                </MenuItem>
                <MenuItem value={10}>FR</MenuItem>
                <MenuItem value={20}>CH</MenuItem>
                <MenuItem value={30}>IN</MenuItem>
              </Select>
            </FormControl>

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls={menuId}
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box
          padding={5}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Image src={`/images/logo.png`} alt="logo" width={120} height={80} />
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} sx={{ marginLeft: 5 }}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </Box>
        <Divider sx={{ borderBottomWidth: 0 }} />
        <Box sx={{ maxWidth: "100%" }} paddingTop={2}>
          <List>
            {menuItems.map((item) => (
              <MenuLinkButton
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </List>
        </Box>

        <Divider sx={{ borderBottomWidth: 0, marginTop: "20px" }} />
        <Box sx={{ maxWidth: "100%" }} marginTop={5}>
          <Button
            fullWidth
            sx={{
              color: "#464255",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#deddd9",
              },
            }}
            disableElevation
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={handleSignout}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
      {/* Main Content */}
      <div className="mt-[100px] ml-30">
        <Profile
          name="Stevan Dux"
          age={27}
          country="Sri Lanka"
          languages="English | Sinhala"
          phoneNumber="061231231"
          address="No 35 2 Colombo"
          email="tryes@gmail.com"
          dob="1997-05-30"
          gender="Male"
          weight={58}
          height={116}
          activityLevel="Sedentery"
          creditCard="1723817232187321"
          tokens={3}
          screeningProgress={75}
        />
      </div>

      {/* <DrawerHeader />
        <Typography
          sx={{ marginBottom: 2 }}
          fontSize={26}
          fontWeight={900}
          color={"#A51008"}
          fontStyle={"extrabold"}
        >
          Dashboard
        </Typography>
        <Calender/>
        <MedicalScreening /> */}

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
