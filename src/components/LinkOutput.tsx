import { Check, ClipboardCopy } from "lucide-react";

interface LinkOutputProps {
  link: string;
  onClick: (link: string) => void;
  isCoopied: boolean;
  theme: string;
}
export default function LinkOutput({ link, onClick, isCoopied, theme }: LinkOutputProps) {
  return (
    <div
      className={`flex justify-between border p-1 rounded-md drop-shadow-md ${
        theme === "dark" ? "text-gray-300 border-white" : "text-black border-black"
      }`}
    >
      <p>{link}</p>
      {!isCoopied && (
        <ClipboardCopy
          strokeWidth={1}
          onClick={() => onClick(link)}
          className={`cursor-pointer ${theme === "dark" ? "text-white" : "text-black"}`}
        />
      )}
      {isCoopied && (
        <Check
          strokeWidth={1}
          className={`cursor-pointer ${theme === "dark" ? "text-white" : "text-black"}`}
        />
      )}
    </div>
  );
}
