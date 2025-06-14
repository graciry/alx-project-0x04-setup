import React from "react";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
