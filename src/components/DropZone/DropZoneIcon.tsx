import { ElementType } from "react";

interface DropZoneIconProps {
  Icon: ElementType;
}
export default function DropZoneIcon({ Icon }: DropZoneIconProps) {
  return (
    <>
      <Icon size={48} strokeWidth={1}/>
    </>
  );
}
