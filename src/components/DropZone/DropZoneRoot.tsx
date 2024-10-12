import { ReactNode } from "react";

interface DropZoneRootProps {
  children: ReactNode;
  theme: string;
}
export default function DropZoneRoot({ children, theme }: DropZoneRootProps) {
  return (
    <label
      className={`w-full h-[150px] flex flex-col justify-center items-center border-2 border-dashed ${
        theme === "dark" ? "border-white" : "border-black"
      } rounded-md pointer`}
    >
      {children}
    </label>
  );
}
