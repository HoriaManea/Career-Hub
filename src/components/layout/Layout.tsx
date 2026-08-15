import React, { type ReactNode } from "react";
import Navigation from "../ui/Navigation";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

export default Layout;
