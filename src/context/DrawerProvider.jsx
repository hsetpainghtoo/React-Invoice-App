import React, { createContext, useState } from "react";

export const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const handleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <DrawerContext.Provider
      value={{ openDrawer, handleDrawer}}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
