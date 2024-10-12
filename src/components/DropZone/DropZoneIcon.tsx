import { ElementType } from "react";

interface DropZoneIconProps {
  Icon: ElementType;
  theme: string;
}
export default function DropZoneIcon({ Icon, theme }: DropZoneIconProps) {
  return (
    <>
      <Icon size={48} strokeWidth={1} className={`${theme === "dark" ? "text-white" : "text-black"}`} />
    </>
  );
}
