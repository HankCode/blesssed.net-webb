import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col min-h-screen justify-center items-center">{children}</div>;
};

export default layout;
