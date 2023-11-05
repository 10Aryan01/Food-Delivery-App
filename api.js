import { client } from "./Sanity";
import { createClient } from "@sanity/client";
let sanityQuery = (query, params) => client.fetch(query, params);

export const getFeatured = () => {
  return sanityQuery(`
    *[_type=='featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
          name
          }
        }
      }
    `);
};
export const getcategories = () => {
  return sanityQuery(`
    *[_type=='category']
    `);
};

export async function getPosts() {
  const posts = await client.fetch(`*[_type=='category']`);
  console.log(posts);
}

export const getFeaturedResById = () => {
  return sanityQuery(
    `
    *[_type=='featured' && _id=$id ]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]
    `,
    { id }
  );
};

const clientone = createClient({
  projectId: "1yx379fu",
  dataset: "fooddeleivery",
  // Other options...
});
