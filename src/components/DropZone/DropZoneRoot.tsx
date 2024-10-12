import { ReactNode } from "react";

interface DropZoneRootProps {
  children: ReactNode;
}
export default function DropZoneRoot({ children }: DropZoneRootProps) {
  return (
    <label className="w-full h-[150px] flex flex-col justify-center items-center border-2 border-dashed border-black rounded-md pointer">
      {children}
    </label>
  );
}
