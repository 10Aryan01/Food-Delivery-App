import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1yx379fu",
  dataset: "fooddeleivery",
  useCdn: false,
  apiVersion: "2023-03-12",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
