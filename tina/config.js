import { defineConfig } from "tinacms";
import {
  about_templateFields,
  blog_section_templateFields,
  blog_templateFields,
  config_templateFields,
  hero_templateFields,
  menus_templateFields,
  parameters_templateFields,
  product_section_templateFields,
  product_templateFields,
  resume_templateFields,
  service_templateFields,
  testimonial_templateFields,
} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "919a772e-086f-4df7-8c5b-d4696669237d", // Get this from tina.io
  token: "c3cd6e8770fd6e626f12d271cd4f078190db9fcb", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  // TODO: fix issue with Tina not detecting media files in assets directory
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Hero",
        name: "hero",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: hero_templateFields(),
      },
      {
        format: "yml",
        label: "About",
        name: "about",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "aboutSection",
        },
        fields: about_templateFields(),
      },
      {
        format: "yml",
        label: "Services",
        name: "services",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "serviceSection",
        },
        fields: service_templateFields(),
      },
      {
        format: "yml",
        label: "Resume",
        name: "resume",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "resumeSection",
        },
        fields: resume_templateFields(),
      },
      {
        format: "yml",
        label: "Testimonials",
        name: "testimonials",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonialSection",
        },
        fields: testimonial_templateFields(),
      },
      {
        format: "yml",
        label: "Product Section",
        name: "product_section",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "productSection",
        },
        fields: product_section_templateFields(),
      },
      {
        format: "yml",
        label: "Blog Section",
        name: "blog_section",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "blogSection",
        },
        fields: blog_section_templateFields(),
      },
      {
        format: "md",
        label: "Product",
        name: "product",
        path: "content/product",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: product_templateFields(),
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: blog_templateFields(),
      },
      {
        format: "yaml",
        label: "Config File",
        name: "config_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: config_templateFields(),
      },
      {
        format: "yaml",
        label: "Menus File",
        name: "menus_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "menus",
        },
        fields: menus_templateFields(),
      },
      {
        format: "yaml",
        label: "Parameters File",
        name: "parameters_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "params",
        },
        fields: parameters_templateFields(),
      },
    ],
  },
});
