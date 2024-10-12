import axios from "axios";

export const useFile = async (file:File) => {
  const formData = new FormData();
  formData.append("file", file);
  const req = await axios.post("https://file.io", formData);
  return req.data;
};
