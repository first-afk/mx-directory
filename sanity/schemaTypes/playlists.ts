import { defineField, defineType } from "sanity";

export const playlists = defineType({
  name: "playlists",
  title: "playlists",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "select", type: "array", of: [{ type: "reference", to:[{type: "startup"}] }] 
    }),
  ],
});
