import { list } from "@keystone-next/keystone";
import { relationship, select, text } from "@keystone-next/keystone/fields";

export const Book = list({
  access: undefined,
  fields: {
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    status: select({
      options: [
        {
          label: "Reading",
          value: "READING",
        },
        {
          label: "Unread",
          value: "UNREAD",
        },
        {
          label: "Finished reading",
          value: "FINISHED",
        },
      ],
      defaultValue: "UNREAD",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
      validation: {
        isRequired: true,
      },
    }),
    rating: select({
      options: [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
      defaultValue: null,
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
    }),
    author: relationship({
      ref: "Author.bibliography",
    }),
  },
  hooks: undefined,
  ui: undefined,
});
