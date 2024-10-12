interface DropZoneInputProps {
  onChange: (file: File) => void;
}
export default function DropZoneInput({ onChange }: DropZoneInputProps) {
  return (
    <input
      type="file"
      name="file"
      id="file"
      hidden
      onChange={(e) => {
        if (e.target.files) onChange(e.target.files[0]);
      }}
    />
  );
}
