import { defineConfig } from "tinacms";
import {
  layoutFields,
  homePageFields,
  ourStoryPageFields,
  menuItemField,
} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Intro Content",
        name: "intro_content",
        path: "markdowns/home",
        match: {
          include: "*",
        },
        fields: homePageFields(),
      },
      {
        format: "md",
        label: "Sahar & Dar Bios",
        name: "sahar___dar_bios",
        path: "markdowns/story",
        match: {
          include: "*",
        },
        fields: ourStoryPageFields(),
        // fields: [
        // {
        //   type: "rich-text",
        //   name: "body",
        //   label: "Body of Document",
        //   description: "This is the markdown body",
        //   isBody: true,
        // },
        // ],
      },
      {
        format: "md",
        label: "Starters",
        name: "starters",
        path: "markdowns/menu/starters",
        match: {
          include: "*",
        },
        fields: menuItemField(),
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
      },
      {
        format: "md",
        label: "Empanadas",
        name: "empanadas",
        path: "markdowns/menu/empanadas",
        match: {
          include: "*",
        },
        fields: menuItemField(),
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
      },
      {
        format: "md",
        label: "Arepa Lab",
        name: "arepa_lab",
        path: "markdowns/menu/arepa-lab",
        match: {
          include: "*",
        },
        fields: menuItemField(),
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
      },
      {
        format: "md",
        label: "Pabellón Platters",
        name: "platters",
        path: "markdowns/menu/platters",
        match: {
          include: "**/*",
        },
        fields: menuItemField(),
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
      },
      {
        format: "md",
        label: "Churros",
        name: "churros",
        path: "markdowns/menu/churros",
        match: {
          include: "**/*",
        },
        fields: menuItemField(),
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
      },
      {
        format: "md",
        label: "Sides and Extras",
        name: "sides_and_extras",
        path: "markdowns/menu/sides-and-extras",
        match: {
          include: "*",
        },
        fields: menuItemField(),
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
      },
      {
        format: "md",
        label: "Drinks",
        name: "drinks",
        path: "markdowns/menu/drinks",
        match: {
          include: "*",
        },
        fields: menuItemField(),
        // fields: [
        //   {
        //     type: "rich-text",
        //     name: "body",
        //     label: "Body of Document",
        //     description: "This is the markdown body",
        //     isBody: true,
        //   },
        // ],
      },
      {
        format: "md",
        label: "Header & Footer",
        name: "header___footer",
        path: "markdowns/global",
        match: {
          include: "**/*",
        },
        fields: layoutFields(),
      },
    ],
  },
});
