import React from "react";

const useMenuNavigator = () => {
  const [anchorMenuElement, setAnchorMenuElement] =
    React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorMenuElement);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenuElement(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorMenuElement(null);
  };

  return {
    anchorMenuElement,
    setAnchorMenuElement,
    menuOpen,
    handleMenuClick,
    handleMenuClose,
  };
};

export default useMenuNavigator;
