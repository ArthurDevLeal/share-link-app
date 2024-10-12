"use client";
import DropZoneContainer from "@/components/DropZoneContainer";
import LinkOutput from "@/components/LinkOutput";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useFile } from "@/hooks/useFile";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Page() {
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isCoopied, setIsCoopied] = useState(false);
  const [theme, setTheme] = useState("dark");

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
    <main
      className={`p-2 h-screen w-full ${
        theme === "dark"
          ? "bg-gradient-to-tr from-black to-slate-900"
          : "bg-gradient-to-tr from-white to-gray-200"
      }`}
    >
      <div className="flex justify-between">
        <h1 className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"}`}>Share files</h1>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
      <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-2`}>
        Share files with your friends easy and fast.
      </p>
      <DropZoneContainer theme={theme} onChange={setFile} isLoading={mutation.isPending} />
      <h2 className={`text-2xl mt-2 ${theme === "dark" ? "text-white" : "text-black"}`}>Link Output</h2>
      <LinkOutput theme={theme} link={link} onClick={handleClickCopy} isCoopied={isCoopied} />
    </main>
  );
}
