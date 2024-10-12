interface DropZoneImageProps {
  image: string;
}
export default function DropZoneImage({ image }: DropZoneImageProps) {
  return <img src={image} alt="#" />;
}
