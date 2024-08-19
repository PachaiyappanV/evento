import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col bg-white/[2%] min-h-screen">
      {children}
    </div>
  );
};

export default Container;
