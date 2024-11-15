"use client";

import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

type MenuLinkButtonProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

const MenuLinkButton = ({ label, icon, href }: MenuLinkButtonProps) => {
  const path = usePathname();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = path.startsWith(href);
  const handleOnClick = () => {
    router.push(href);
  };
  return (
    <Box display="flex" flexDirection="row" marginRight={2} marginBottom={2}>
      <Box
        sx={{
          width: 5,
          bgcolor: isSelected ? "#A51008" : "transparent",
          marginRight: 3,
        }}
      />
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleOnClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            backgroundColor: isSelected ? "#A5100826" : "transparent",
            fontSize: 2,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#A5100826",
              color: "#A51008",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: isSelected || isHovered ? "#A51008" : "#464255",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={label}
            primaryTypographyProps={
              isSelected
                ? { fontSize: "15px", color: "#A51008", fontWeight: "bold" }
                : {}
            }
          />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};
export default MenuLinkButton;
