interface DropZoneLabelProps {
  label: string;
}
export default function DropZoneLabel({ label }: DropZoneLabelProps) {
  return <p className="text-gray-700">{label}</p>;
}
