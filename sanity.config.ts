import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "phoenix-stores",
  basePath: "/admin",
  title: "Phoenix-Stores",
  projectId: "3qeh07ag",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
