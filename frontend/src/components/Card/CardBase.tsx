import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const CardBase = ({ children }: CardProps) => {
  return <div className="w-44 rounded-lg shadow-lg border">{children}</div>;
};

export default CardBase;
