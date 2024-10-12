import React from "react";
import Navbar from "@/components/Navbar";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default layout;
