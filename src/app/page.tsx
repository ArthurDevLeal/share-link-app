"use client";
import DropZoneContainer from "@/components/DropZoneContainer";
import LinkOutput from "@/components/LinkOutput";
import { useFile } from "@/hooks/useFile";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Page() {
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isCoopied, setIsCoopied] = useState(false);

  const mutation = useMutation({
    mutationFn: useFile,
    onSuccess: (data) => setLink(data.link),
  });

  const handleClickCopy = (link: string) => {
    navigator.clipboard.writeText(link);
    setIsCoopied(true);
    setTimeout(() => setIsCoopied(false), 2000);
  };

  useEffect(() => {
    if (file) {
      mutation.mutate(file);
    }
  }, [file]);
  
  return (
    <main>
      <h1 className="text-3xl ">Share files</h1>
      <p className="text-gray-700 mb-2">Share files with your friends easy and fast.</p>
      <DropZoneContainer onChange={setFile} isLoading={mutation.isPending} />
      <h2 className="text-2xl mt-2">Link Output</h2>
      <LinkOutput link={link} onClick={handleClickCopy} isCoopied={isCoopied} />
    </main>
  );
}
