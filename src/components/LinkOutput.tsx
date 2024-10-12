import { Check, ClipboardCopy } from "lucide-react";

interface LinkOutputProps {
  link: string;
  onClick: (link: string) => void;
  isCoopied: boolean;
}
export default function LinkOutput({ link, onClick, isCoopied }: LinkOutputProps) {
  return (
    <div className="flex justify-between border p-1 rounded-md">
      <p>{link}</p>
      {!isCoopied && (
        <ClipboardCopy strokeWidth={1} onClick={() => onClick(link)} className="cursor-pointer" />
      )}
      {isCoopied && <Check strokeWidth={1} className="cursor-pointer" />}
    </div>
  );
}
