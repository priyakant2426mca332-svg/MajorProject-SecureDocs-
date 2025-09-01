import { supabase } from "../supabaseClient";

export const getPublicUrl = (fileUrl) => {
  const path = fileUrl.split("/object/sign/secure-docs/")[1].split("?")[0];
  const { publicURL } = supabase.storage.from("secure-docs").getPublicUrl(path);
  return publicURL;
};
