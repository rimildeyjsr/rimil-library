import { list } from "@keystone-next/keystone";
import { relationship, text, float } from "@keystone-next/keystone/fields";

export const Author = list({
  access: undefined,
  fields: {
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    rating: float({
      defaultValue: 0,
    }),
    bibliography: relationship({
      ref: "Book.author",
      many: true,
    }),
  },
  hooks: undefined,
  ui: undefined,
});
