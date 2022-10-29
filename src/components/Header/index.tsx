import React from "react";
import {
  AppBar,
  Box,
  ButtonBase,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ShopIcon from "@mui/icons-material/ShopOutlined";
import AboutIcon from "@mui/icons-material/InfoOutlined";

import Link from "next/link";
import { Container, CustomLink } from "./styles";
import ThemesEntity from "../../domain/entities/ThemesEntity";
import useHeaderState from "../../states/header";

const Header = () => {
  const {
    currentTheme,
    toggleTheme,
    anchorMenuElement,
    handleMenuClick,
    handleMenuClose,
    menuOpen,
  } = useHeaderState();

  return (
    <Container style={{ height: 70 }}>
      <AppBar component="nav">
        <Menu
          anchorEl={anchorMenuElement}
          open={menuOpen}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Link href="/">
              <CustomLink>
                <HomeIcon />
                Home
              </CustomLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/shop">
              <CustomLink>
                <ShopIcon />
                Shop
              </CustomLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">
              <CustomLink>
                <AboutIcon />
                About
              </CustomLink>
            </Link>
          </MenuItem>
        </Menu>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
            }}
          >
            MUIshop
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Link href="/">
              <CustomLink>Home</CustomLink>
            </Link>
            <Link href="/shop">
              <CustomLink>Shop</CustomLink>
            </Link>
            <Link href="/about">
              <CustomLink>About</CustomLink>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", sm: "auto" },
              justifyContent: "flex-end",
            }}
          >
            <ButtonBase
              style={{ marginLeft: 10, borderRadius: 10 }}
              onClick={toggleTheme}
            >
              {currentTheme === ThemesEntity.Dark ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </ButtonBase>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
