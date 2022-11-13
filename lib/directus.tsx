import { Directus } from "@directus/sdk";
import { BlogData } from "../interface/Article";

const directus = new Directus<BlogData>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL
    ? process.env.NEXT_PUBLIC_DIRECTUS_URL
    : ""
);

export default directus;
