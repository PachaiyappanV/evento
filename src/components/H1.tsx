import { ReactNode } from "react";

const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-bold tracking-tight text-3xl lg:text-6xl ">
      {children}
    </h1>
  );
};

export default H1;
