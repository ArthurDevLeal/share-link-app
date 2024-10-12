interface DropZoneLabelProps {
  label: string;
  theme: string;
}
export default function DropZoneLabel({ label, theme }: DropZoneLabelProps) {
  return <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{label}</p>;
}
