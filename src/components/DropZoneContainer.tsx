import { DropZoneProps } from "@/types/DropZoneProps";
import { DropZone } from "./DropZone/DropZoneIndex";

import { Image } from "lucide-react";
import Loading from "./Loading";

export default function DropZoneContainer({ onChange, isLoading }: DropZoneProps) {
  return (
    <DropZone.Root>
      {!isLoading && (
        <>
          <DropZone.Icon Icon={Image} />
          <DropZone.Label label="Insert here your files" />
          <DropZone.Input onChange={onChange} />
        </>
      )}
      {isLoading && <Loading />}
    </DropZone.Root>
  );
}
