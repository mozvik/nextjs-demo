import { Directus } from "@directus/sdk";
import { BlogData } from "../models/Article";
import { TestimonialData } from "./TestimonialsData";

const directusTestimonial = new Directus<TestimonialData>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL
    ? process.env.NEXT_PUBLIC_DIRECTUS_URL
    : ""
);

export default directusTestimonial;
