export function homePageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "excerpt",
      label: "excerpt",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "foodImage",
      label: "Food Image",
    },
    {
      type: "string",
      name: "foodImageAltText",
      label: "Food Image Alt Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "hdImage",
      label: "Content Image",
    },
    {
      type: "string",
      name: "hdImageAltText",
      label: "Content Image Alt Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ];
}

export function layoutFields() {
  return [
    {
      type: "object",
      name: "logo",
      label: "Business Logo",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "altText",
          label: "Alt Text",
        },
      ],
    },
    {
      type: "object",
      name: "socialIcons",
      label: "Social Media Icons & Links",
      fields: [
        {
          type: "object",
          name: "email",
          label: "Email",
          fields: [
            {
              type: "image",
              name: "image",
              label: "SVG icon",
            },
            {
              type: "string",
              name: "altText",
              label: "Icon Alt Text",
            },
            {
              type: "string",
              name: "ariaLabel",
              label: "Aria Label",
              description:
                "Describes the action that clicking this icon will initiate",
            },
            {
              type: "string",
              name: "link",
              label: "Link URL",
            },
          ],
        },
        {
          type: "object",
          name: "facebook",
          label: "Facebook",
          fields: [
            {
              type: "image",
              name: "image",
              label: "SVG icon",
            },
            {
              type: "string",
              name: "altText",
              label: "Icon Alt Text",
            },
            {
              type: "string",
              name: "ariaLabel",
              label: "Aria Label",
              description:
                "Describes the action that clicking this icon will initiate",
            },
            {
              type: "string",
              name: "link",
              label: "Link URL",
            },
          ],
        },
        {
          type: "object",
          name: "instagram",
          label: "Instagram",
          fields: [
            {
              type: "image",
              name: "image",
              label: "SVG icon",
            },
            {
              type: "string",
              name: "altText",
              label: "Icon Alt Text",
            },
            {
              type: "string",
              name: "ariaLabel",
              label: "Aria Label",
              description:
                "Describes the action that clicking this icon will initiate",
            },
            {
              type: "string",
              name: "link",
              label: "Link URL",
            },
          ],
        },
        {
          type: "object",
          name: "map",
          label: "Map",
          fields: [
            {
              type: "image",
              name: "image",
              label: "SVG icon",
            },
            {
              type: "string",
              name: "altText",
              label: "Icon Alt Text",
            },
            {
              type: "string",
              name: "ariaLabel",
              label: "Aria Label",
              description:
                "Describes the action that clicking this icon will initiate",
            },
            {
              type: "string",
              name: "link",
              label: "Link URL",
            },
          ],
        },
        {
          type: "object",
          name: "phone",
          label: "Phone",
          fields: [
            {
              type: "image",
              name: "image",
              label: "SVG icon",
            },
            {
              type: "string",
              name: "altText",
              label: "Icon Alt Text",
            },
            {
              type: "string",
              name: "ariaLabel",
              label: "Aria Label",
              description:
                "Describes the action that clicking this icon will initiate",
            },
            {
              type: "string",
              name: "link",
              label: "Link URL",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "orderOnline",
      label: "Order Online",
      fields: [
        {
          type: "string",
          name: "text",
          label: "Link Display Text",
        },
        {
          type: "string",
          name: "link",
          label: "Link URL",
        },
      ],
    },
    {
      type: "object",
      name: "contactInfo",
      label: "Contact Info",
      fields: [
        {
          type: "string",
          name: "phoneNumber",
          label: "Phone Number",
        },
        {
          type: "string",
          name: "streetAddress",
          label: "Street Address",
        },
        {
          type: "string",
          name: "city",
          label: "City",
        },
        {
          type: "string",
          name: "state",
          label: "State",
        },
        {
          type: "string",
          name: "zip",
          label: "Zip",
        },
      ],
    },
    {
      type: "string",
      name: "businessHours",
      label: "Business Hours",
      list: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ];
}

export function menuItemField() {
  return [
    {
      type: "number",
      name: "number",
      label: "Order of Appearance",
    },
    {
      type: "string",
      name: "itemName",
      label: "Item Name",
    },
    {
      type: "string",
      name: "price",
      label: "Price",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "glutenFree",
      label: "Gluten Free?",
    },
    {
      type: "boolean",
      name: "vegan",
      label: "Vegan?",
    },
    {
      type: "string",
      name: "menuSectionTitle",
      label: "Menu Section Title",
      description:
        "Only used on 'headers.md' file - DO NOT FILL THIS OUT ON A MENU ITEM",
    },
    {
      type: "string",
      name: "menuSectionPrimarySubtext",
      label: "Menu Section Primary Subtext",
      description:
        "Only used on 'headers.md' file - DO NOT FILL THIS OUT ON A MENU ITEM",
    },
    {
      type: "string",
      name: "menuStepOneTitle",
      label: "Menu Step One Title",
      description:
        "Only used on 'headers.md' file - DO NOT FILL THIS OUT ON A MENU ITEM",
    },
    {
      type: "string",
      name: "menuStepTwoTitle",
      label: "Menu Step Two Title",
      description:
        "Only used on 'headers.md' file - DO NOT FILL THIS OUT ON A MENU ITEM",
    },
  ];
}

export function ourStoryPageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "excerpt",
      label: "excerpt",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "altText",
      label: "alt text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ];
}
