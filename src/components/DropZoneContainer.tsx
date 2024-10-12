import { DropZoneProps } from "@/types/DropZoneProps";
import { DropZone } from "./DropZone/DropZoneIndex";

import { Image } from "lucide-react";
import Loading from "./Loading";

export default function DropZoneContainer({ onChange, isLoading, theme }: DropZoneProps) {
  return (
    <DropZone.Root theme={theme}>
      {!isLoading && (
        <>
          <DropZone.Icon theme={theme} Icon={Image} />
          <DropZone.Label theme={theme} label="Insert here your files" />
          <DropZone.Input onChange={onChange} />
        </>
      )}
      {isLoading && <Loading />}
    </DropZone.Root>
  );
}
