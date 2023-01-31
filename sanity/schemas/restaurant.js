import { defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "lon",
      type: "number",
      title: "Longtitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address of the Restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 stars)",
      validation: (Rule) => 
      Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a value betweeen 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{type: 'reference', to: [{type: 'dish'}] }],
    },

  ],
})
