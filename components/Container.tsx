import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PropTypes = {
  className?: string;
  children: ReactNode;
  page?: boolean;
  section?: boolean;
};

const Container = ({ className, children, page = false, section = false }: PropTypes) => {
  return (
    <div
      className={cn(
        className,
        "mx-auto max-w-screen-2xl w-full md:px-20 sm:px-10 px-6",
        page && "mt-20 sm:mt-28 ",
        section && "py-20 md:py-36"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
